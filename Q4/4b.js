//Build an Internship Tracking System using Node.js, Express, and MongoDB with the following requirements:
//Create a MongoDB collection to store internship details with fields: Student_ID, Name, Company, Duration, and Status.
//Accept internship data through a web form and store it in the database.
//Implement a GET route to display all students interning at "Infosys".
//Implement a PUT route to update the status when a student's internship is marked as completed.

const express=require('express');
const {MongoClient}=require('mongodb');
const path=require('path');
const url='mongodb://127.0.0.1:27017';
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname,'4b.html'));
});

app.post('/submit', async (req,res) =>{
        const{id, name, company, duration, istatus}=req.body;

        const client=await MongoClient.connect(url);
        const db=client.db('4b');
        const collection=db.collection('students');
        await collection.insertOne({id, name, company, duration, istatus});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Internship Added</h2>
        <ul>
        ${all.map(s => `<li>${s.id} - ${s.name} - ${s.company} - ${s.duration} - ${s.istatus}</li>`).join()}
        </ul>
        <br><a href="/">Back</a>
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('4b');
        const collection=db.collection('students');

        const details=await collection.find({company:'infosys'}).toArray();
        await client.close()

        res.send(`
        <h2>Infosys Internships</h2>
        <ul>
        ${details.map(s => `<li>${s.id} - ${s.name} - ${s.company} - ${s.duration} - ${s.istatus}</li>`).join()}
        </ul>
        <br><a href="/">Back</a>
        `);
});

app.put('/update', async(req,res)=>{
        const {id}=req.body;
        const client=await MongoClient.connect(url);
        const db=client.db('4b');
        const collection=db.collection('students');

        await collection.updateOne({id},{$set:{istatus: 'completed'}});         //Important
        await client.close()

        res.send({message: 'Status Updated'});
});

app.listen(3000, ()=>{
        console.log("Server running on 3000");
});
