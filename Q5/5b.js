//Develop a Node.js application using Express and MongoDB to manage student records with the following features:
//Accept student details from a web form: Name, USN, Department, and Grade.
//Store the submitted information in a MongoDB database.
//Implement a PUT route to update the grade of a student by specifying the Name.
//Implement a GET route to display all student records from the database.

const express=require('express');
const {MongoClient}=require('mongodb');
const path=require('path');
const url='mongodb://127.0.0.1:27017';
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname,'5b.html'));
});

app.post('/submit', async (req,res) =>{
        const{name, usn, dept, grade}=req.body;

        const client=await MongoClient.connect(url);
        const db=client.db('5b');
        const collection=db.collection('students');
        await collection.insertOne({name, usn, dept, grade});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Student Record Added</h2>
        <ul>
        ${all.map(s => `<li>${s.name} - ${s.usn} - ${s.dept} - Grade: ${s.grade}</li>`).join()}
        </ul>
        <br><a href="/">Back</a>
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('5b');
        const collection=db.collection('students');
        const details=await collection.find().toArray();
        await client.close()

        res.send(`
        <h2>All Students</h2>
        <ul>
        ${details.map(s => `<li>${s.name} - ${s.usn} - ${s.dept} - Grade: ${s.grade}</li>`).join()}
        </ul>
        <br><a href="/">Back</a>
        `);
});

app.put('/update', async(req,res)=>{                  //New Section
        const{name, grade}=req.body;

        const client=await MongoClient.connect(url);
        const db=client.db('5b');
        const collection=db.collection('students');

        await collection.updateOne({name},{$set:{grade}});        //Important
        await client.close();

        res.send({message: 'Grade Updated Successfully'});
});

app.listen(3000, () =>{
        console.log("Server running on 3000");
});
