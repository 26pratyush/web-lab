//Create a Node.js application using Express and MongoDB to manage course enrollments with the following features:
//Accept enrollment details through a web form: Student_ID, Name, Course Name, Duration, and Status.
//Store the enrollment data in a MongoDB collection.
//Implement a GET route to display all active enrollments (Status: "active").
//Implement a PUT route to update the status of an enrollment to "completed" based on Student_ID or Course_Name.

const express=require('express');
const {MongoClient}=require('mongodb');
const path=require('path');
const url='mongodb://127.0.0.1:27017';
const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname,'7b.html'));
});

app.post('/submit', async (req,res) =>{
        const{id, name, course, duration, istatus}=req.body;

        const client=await MongoClient.connect(url);
        const db=client.db('7b');
        const collection=db.collection('students');
        await collection.insertOne({id, name, course, duration, istatus});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Course Enrolled</h2>
        <ul>
        ${all.map(s => `<li>${s.id} - ${s.name} - ${s.course} - ${s.duration} - ${s.istatus}</li>`).join()}
        </ul>
        <br><a href="/">Back</a>
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('7b');
        const collection=db.collection('students');

        const details=await collection.find({istatus:'active'}).toArray();
        await client.close()

        res.send(`
        <h2>Active Enrollments</h2>
        <ul>
        ${details.map(s => `<li>${s.id} - ${s.name} - ${s.course} - ${s.duration} - ${s.istatus}</li>`).join()}
        </ul>
        <br><a href="/">Back</a>
        `);
});

app.put('/update', async(req,res)=>{
        const {id,course}=req.body;
        const client=await MongoClient.connect(url);
        const db=client.db('7b');
        const collection=db.collection('students');

        if(id!=""){                                                                         // use "" not null!
                await collection.updateOne({id},{$set:{istatus:'completed'}});              //Important
                res.send({message:'Status updated through student ID'});
        }
        else if(course!=""){
                await collection.updateMany({course}, {$set:{istatus:'completed'}});
                res.send({message:'Status updated through course'});
        }
        else{
                res.send({message:'Error: Enter an id or course'});
        }
});

app.listen(3000, ()=>{
        console.log("Server running on 3000");
