//Create a Node.js application using Express and MongoDB with the following features:
//Accept student details from a web page: User_Name, Branch, and Semester.
//Store the data in a MongoDB collection.
//Implement a GET route to display all students who belong to the 6th Semester and are from the CSE branch.

const express=require('express');
const {MongoClient}=require('mongodb');
const app=express();
const path=require('path');
const url='mongodb://127.0.0.1:27017';

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname, '9b.html'));
});

app.post('/submit', async(req,res) =>{
        const {usn, branch, sem} = req.body;

        const client=await MongoClient.connect(url);;
        const db=client.db('9b');
        const collection=db.collection('students');
        await collection.insertOne({usn, branch, sem});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Student Details Submitted</h2>
        <h3>All Students</h3>
        ${all.map(s=>`<li>${s.usn} ${s.branch} ${s.sem}</li>`).join()}
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('9b');
        const collection=db.collection('students');
        const cse=await collection.find({branch: 'cse', sem: '6'}).toArray();

        res.send(`
        <h2>Students in 6th Sem CSE</h2>
        ${cse.map(s=>`<li>${s.usn} ${s.branch} ${s.sem}</li>`).join()}
        `);
});

app.listen(3000, ()=>{
        console.log("Server running on 3000");
});
