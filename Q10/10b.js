//Develop a Node.js application using Express and MongoDB to create a portal for recording student startup ideas with the following features:
//Accept the following details from a web form: ID, Team_Name, Title, Domain, and Funding_Required.
//Store the submitted data in a MongoDB collection.
//Implement a GET route to display all startup ideas in the "EdTech" domain where the Funding Required exceeds ₹5 lakhs.

const {MongoClient}=require('mongodb');
const app=express();
const path=require('path');
const url='mongodb://127.0.0.1:27017';

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname, '10b.html'));
});

app.post('/submit', async(req,res) =>{
        const {id, name, title, domain, fund} = req.body;
        const fundint=parseInt(fund);

        const client=await MongoClient.connect(url);
        const db=client.db('10b');
        const collection=db.collection('ideas');
        await collection.insertOne({id, name, title, domain, fund:fundint});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Team Details Submitted</h2>
        <h3>All Teams</h3>
        ${all.map(t=>`<li>${t.id} ${t.name} ${t.title} ${t.domain} ${t.fund}</li>`).join()}
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('10b');
        const collection=db.collection('ideas');

        const best=await collection.find({domain:"ed-tech",fund:{$gte:500000}}).toArray();
        await client.close();

        res.send(`
        <h2>Ed-Tech > 5L Teams</h2>
        ${best.map(t=>`<li>${t.id} ${t.name} ${t.title} ${t.domain} ${t.fund}</li>`).join()}
        `);
});

app.listen(3000, ()=>{
        console.log("Server running on 3000");
});
