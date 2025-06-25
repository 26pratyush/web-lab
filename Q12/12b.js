//Develop an Exam Management System using Node.js, Express, and MongoDB with the following functionality:
//Create a student database with appropriate fields such as: Student_ID, Name, Subject, Marks, and Eligibility_Status.
//Store the student data in a MongoDB collection.
//Implement logic to mark students as "Not Eligible" if their Marks 20.
//Provide a GET route to display the list of students who are not eligible for the exam based on this criterion.

const express=require('express');
const {MongoClient}=require('mongodb');
const app=express();
const path=require('path');
const url='mongodb://127.0.0.1:27017';

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname, '12b.html'));
});

app.post('/submit', async(req,res) =>{
        const {id, name, course, marks} = req.body;
        const marksint=parseInt(marks);
        const elig= marksint<20? "Not Eligible":"Eligible";       //Important!!

        const client=await MongoClient.connect(url);
        const db=client.db('12b');
        const collection=db.collection('students');
        await collection.insertOne({id, name,course,marks:marksint, elig});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Student Details Submitted</h2>
        <h3>All Students</h3>
        ${all.map(s=>`<li>${s.id} ${s.name} ${s.course} ${s.marks}</li>`).join()}
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('12b');
        const collection=db.collection('students');

        const ne= await collection.find({elig:"Not Eligible"}).toArray();
        res.send(`
        <h2>NE Students</h2>
        ${ne.map(s=>`<li>${s.id} ${s.name} ${s.course} ${s.elig}</li>`).join()}
        `);
});

app.listen(3000, () =>{
        console.log("Server running on 3000");
});
