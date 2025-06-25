//Develop a Node.js application using Express and MongoDB to manage hospital data with the following requirements:
//Accept and store hospital details: Hospital_ID, Name, Location, Total_Beds, and Occupied_Beds using a web form.
//Store this information in a MongoDB collection.
//Implement a GET route to display all hospitals where available beds (Total_Beds - Occupied_Beds) are less than 10.
//Implement a POST route to admit a patient, which will increment the Occupied_Beds count for the specified hospital.

const express=require('express');
const {MongoClient}=require('mongodb');
const path=require('path');
const url='mongodb://127.0.0.1:27017';
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname, '6b.html'));
});

app.post('/submit', async(req,res)=>{
        const {id, name, loc, total, occ}=req.body;
        const totalint=parseInt(total);
        const occint=parseInt(occ);
        const avail=totalint-occint;

        const client=await MongoClient.connect(url);
        const db=client.db('6b');
        const collection=db.collection('hospitals');
        await collection.insertOne({id, name, loc, total:totalint, occ:occint, avail});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Hospital Details Submitted</h2>
        <h3>All Hospitals</h3>
        ${all.map(h=>`<li>${h.id} ${h.name} ${h.loc} ${h.total} ${h.occ}</li>`).join()}
        `);
});

app.get('/filter', async(req,res)=>{
        const client=await MongoClient.connect(url);
        const db=client.db('6b');                                                                                                             
        const collection=db.collection('hospitals');

        const less=await collection.find({avail:{$lte:10}}).toArray();
        await client.close();

        res.send(`
        <h2>Hospital < 10 Beds</h2>
        ${less.map(h=>`<li>${h.id} ${h.name} ${h.loc} ${h.avail}</li>`).join()}
        `);
});

app.post('/update', async(req,res)=>{
        const {id}=req.body;

        const client=await MongoClient.connect(url);
        const db=client.db('6b');
        const collection=db.collection('hospitals');

        await collection.updateOne({id},{$inc:{avail:-1, occ:1}});        //Important!!
        const urgent=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Updated Hospital Details</h2>
        ${urgent.map(h=>`<li>${h.id} ${h.name} ${h.loc} ${h.total} ${h.occ}</li>`).join()}
        `);
});

app.listen(3000, () =>{
        console.log("Server running on 3000");
});
