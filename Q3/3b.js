//3.b) Develop a Node.js application using Express and MongoDB to perform the following tasks:
//Create a database named HR with a collection called employees.
//Each employee document should include the following fields: emp_name, email, phone, hire date, job_title, and salary.
//Design a web form to collect this information from the user and store it in the MongoDB database.
//Implement a GET route to display all employee records where the salary is greater than 50,000.

const express=require('express');
const {MongoClient}=require('mongodb');
const app=express();
const url='mongodb://127.0.0.1:27017';
const path=require('path');

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname,'3b.html'));
});

app.post('/submit', async(req,res) =>{
        const {name, email, phone, date, job, salary} = req.body;
        salint=parseInt(salary);

        const client=await MongoClient.connect(url);
        const db=client.db("3b");
        const collection=db.collection("employees");

        await collection.insertOne({name, email, phone, date, job, salary:salint});
        const all=await collection.find().toArray();
        await client.close()

        res.send(`
        <h2>Employee Details Submitted</h2>
        <h3>All Details:</h3>
        ${all.map(e =>`<li>${e.name} ${e.email} ${e.phone} ${e.date} ${e.date} ${e.job} ${e.salary}</li>`).join()}
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url); 
        const db=client.db("3b");
        const collection=db.collection("employees");

        const high=await collection.find({salary :{$gt: 50000}}).toArray();
        await client.close();

        res.send(`
        <h2>Employee with Salaries > 50000</h2>
        <h3>All Details:</h3>
        ${high.map(e =>`<li>${e.name} ${e.phone} ${e.salary}</li>`).join()}
        `);
});

app.listen(3000, () =>{
        console.log("Server running on 3000");
});
