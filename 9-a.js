//Write a Node.js program using Express framework and create a on-line training site with three pages of content: 
//Home, Registration, Announcements & Contact. Use routing to swap between them.

var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/contacts", (req, res) => {
    res.send("<h1>Message 9741576165 for more info.</h1>");
});

app.use((req,res)=>{
    res.send("<h1>404: No Such Page Exists.</h1>")
});

app.listen(5000, () => {
    console.log("Running on port 5000");
});
