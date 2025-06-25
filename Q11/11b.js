//Develop an Attendance Management System using Node.js, Express, and MongoDB with the following features:
//Create a student database with appropriate fields such as:
//Student_ID, Name, Course, Total_Attendance, Classes_Attended, and Attendance_Percentage.
//Calculate the Attendance_Percentage as:
//Attendance_Percentage = (Classes_Attended / Total_Attendance) * 100.
//Implement a GET route to display all students whose attendance is below 75%.

const express=require('express');
const {MongoClient}=require('mongodb');
const app=express();
const path=require('path');
const url='mongodb://127.0.0.1:27017';

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname, '11b.html'));
});

app.post('/submit', async(req,res) =>{
        const {id, name, course, total, attended} = req.body;
        const totalint=parseFloat(total);
        const attendedint=parseFloat(attended);
        const attendance=(attendedint/totalint)*100;

        const client=await MongoClient.connect(url);
        const db=client.db('11b');
        const collection=db.collection('students');
        await collection.insertOne({id, name,course, total:totalint, attended:attendedint, attendance});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Attendance Details Submitted</h2>
        <h3>All Students</h3>
        ${all.map(s=>`<li>${s.id} ${s.name} ${s.course} ${s.total} ${s.attended} ${s.attendance}%</li>`).join()}
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('11b');
        const collection=db.collection('students');

        const ne= await collection.find({attendance:{$lt:75}}).toArray();
        res.send(`
        <h2>NE Students</h2>
        ${ne.map(s=>`<li>${s.id} ${s.name} ${s.attendance}%</li>`).join()}
        `);
});

app.listen(3000, () =>{
        console.log("Server running on 3000");
});
