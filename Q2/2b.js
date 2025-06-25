//Write a Node.js application using Express and MongoDB with the following functionality:
//Accept student details via a web form: Student name, USN, Semester, and Exam fee.
//Store the submitted data in a MongoDB collection.
//Implement a feature to delete all students from the database who have not paid the exam fee (Exam_fee = 0 or null).

const express=require('express');
const {MongoClient}=require('mongodb');
const path=require('path');
const url='mongodb://127.0.0.1:27017';
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname, '2b.html'));
});

app.post('/submit', async(req,res)=>{
        const {name, usn, sem, fee}=req.body;
        const feeint=parseInt(fee);

        const client=await MongoClient.connect(url);
        const db=client.db('2b');
        const collection=db.collection('students');
        await collection.insertOne({name, usn, sem, fee:feeint});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Fee Details Submitted</h2>
        <h3>Student Exam Details</h3>
        ${all.map(s=>`<li>${s.name} ${s.usn} ${s.sem} ${s.fee}</li>`).join()}
        `);
});

app.post('/filter', async(req,res)=>{
        const client=await MongoClient.connect(url);
        const db=client.db('2b');
        const collection=db.collection('students');

        await collection.deleteMany({fee:{$lte:0}});        //Important!!
        const rich=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Rich Students</h2>
        ${rich.map(s=>`<li>${s.name} ${s.usn} ${s.sem} ${s.fee}</li>`).join()}
        `);
});

app.listen(3000, () =>{
        console.log("Server running on 3000");
});
