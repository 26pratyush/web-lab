//Write a Node.js program using Express framework and create a on-line training site with three pages of content: 
//Home, Registration, Announcements & Contact. Use routing to swap between them.

var express = require("express");
var http = require("http");
var app = express();

// Middleware: Sets Content-Type for all routes and passes control
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

// Route: Home Page
app.get("/", (req, res) => {
  res.send("<h1>✅ Welcome to the Online Training Site - Home</h1>");
});

// Route: Registration Page
app.get("/registration", (req, res) => {
  res.send("<h1>📝 Registration Page</h1><p>Please fill out the form to register.</p>");
});

// Route: Announcements & Contact Page
app.get("/announcements", (req, res) => {
  res.send("<h1>📢 Announcements & Contact</h1><p>Here you can find the latest announcements and contact info.</p>");
});

// Fallback Route: Any other URL (404)
app.use((req, res) => {
  res.status(404).send("<h3>❌ 404 - Page Not Found!</h3>");
});

// Start HTTP server
http.createServer(app).listen(5000, () => {
  console.log("✅ Server is running at http://localhost:5000");
});
