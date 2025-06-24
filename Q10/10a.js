//Write a node.js Express program to create a custom middleware functions for
//i. Logger
//ii. No. of time the visitor visited the website

const express=require('express');
const app=express();

let count=0;

app.get('/', (req,res) =>{
    count++;
    console.log("LOGGED");
    console.log(`${new Date()} -${req.method}-${req.url}`);      //remember

res.send(`
    <h2>Hello User</h2>
    <p>You are visitor number ${count}
`);
});

app.listen(3000, ()=>{
    console.log("Server running on 3000");
})
