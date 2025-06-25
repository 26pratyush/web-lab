//Write a Complaint Management API using Node.js, Express, and MongoDB with the following features:
//Each complaint should include: Complaint ID, User Name, Issue, and Status.
//Implement a POST route to submit a new complaint.
//Implement a PUT route to update the status of a complaint (e.g., "In Progress", "Resolved").
//Implement a GET route to retrieve all complaints that are currently pending.

const express=require('express');
const {MongoClient}=require('mongodb');
const path=require('path');
const url='mongodb://127.0.0.1:27017';
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname,'1b.html'));
});

app.post('/submit', async (req,res) =>{
        const{id, name, issue, istatus}=req.body;

        const client=await MongoClient.connect(url);
        const db=client.db('1b');
        const collection=db.collection('complaints');
        await collection.insertOne({id, name, issue, istatus});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Complaint Added</h2>
        <ul>
        ${all.map(s => `<li>${s.id} - ${s.name} - ${s.issue} - ${s.istatus}</li>`).join()}
        </ul>
        <br><a href="/">Back</a>
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('1b');
        const collection=db.collection('complaints');

        const details=await collection.find({istatus:'pending'}).toArray();
        await client.close()

        res.send(`
        <h2>Pending Complaints</h2>
        <ul>
        ${details.map(s => `<li>${s.id} - ${s.name} - ${s.issue} - ${s.istatus}</li>`).join()}
        </ul>
        <br><a href="/">Back</a>
        `);
});

app.put('/update', async(req,res)=>{
        const {id,newstatus}=req.body;
        const client=await MongoClient.connect(url);
        const db=client.db('1b');
        const collection=db.collection('complaints');

        await collection.updateOne({id},{$set:{istatus: newstatus}});
        await client.close()

        res.send({message: 'Status Updated'});
});

app.listen(3000, ()=>{
        console.log("Server running on 3000");
});
