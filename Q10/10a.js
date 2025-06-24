//Write a node.js Express program to create a custom middleware functions for
//i. Logger
//ii. No. of time the visitor visited the website

const express = require('express');
const app = express();

let visitCount = 0;

app.get('/', (req, res) => {
  visitCount++; // increase count
  
  console.log('LOGGED');
  console.log(`${new Date().toLocaleString()} - ${req.method} ${req.url}`);

  res.send(`
    <h2>Hello User!</h2>
    <p>You are visitor number: <strong>${visitCount}</strong></p>
  `);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
