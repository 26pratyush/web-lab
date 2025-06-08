//Write a node.js Express program to create a custom middleware functions for
//i. Logger
//ii. No. of time the visitor visited the website (Not Done)

// Setup Express App
const express = require('express');
const app = express();

// Middleware to log requests and add request time
app.use((req, res, next) => {
  console.log('LOGGED'); // Log every request
  req.requestTime = Date.now(); // Add request time
  next();
});

// Home route
app.get('/', (req, res) => {
  res.send(`Hello World!<br><small>Requested at: ${req.requestTime}</small>`);
});

// /hello route
app.get('/hello', (req, res) => {
  res.send('Hello from /hello route');
});

// Start server
app.listen(5000, () => console.log("✅ Server is running at http://localhost:5000"));
