//Write a node.js Express program to create a custom middleware functions for
//i. Logger
//ii. No. of time the visitor visited the website (Not Done)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('LOGGED'); 
  res.send(`Hello World! <br> Requested at: ${Date.now()}`);
});

app.get('/hello', (req, res) => {
  res.send('Hello from /hello route');
});

app.listen(5000, () => console.log("Server is running on 5000"));
