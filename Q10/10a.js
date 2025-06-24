//Write a node.js Express program to create a custom middleware functions for
//i. Logger
//ii. No. of time the visitor visited the website

const express=require('express');
const app=express();

function logger(req,res,next){
        console.log("LOGGED");
        console.log(`${new Date()} ${req.method} - ${req.url}`);
        next();
}

app.use(logger);

let count=0;

function visitCount(req,res,next){
        count++;
        next();
}

app.use(visitCount);

app.get('/', (req,res) =>{
        res.send(`
        <h2>Welcome User</h2>
        <p>You have visited ${count} times</p>
        `);
});

app.listen(3000, ()=>{
        console.log("Server running on 3000");
});
