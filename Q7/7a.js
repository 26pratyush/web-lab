//Write a Node.js program using Express framework to display different branch information offered in an Engineering College 
//with different background color and fonts (Note: Use Routing, Min: 3 branches)

const express=require('express');
const app=express();

function genPage(title, bgcolor, font, text){
        return (`
        <html>
        <head>
        <title>${title}</title>
        </head>
        <body style="background-color:${bgcolor}; font-family:${font}; color:black; padding:40px;">
        <h1>Department of ${title}</h1>
        <p>${text}</p>
        <a href="/">Back to Home</a>
        </body>
        </html>
        `);
}

app.get('/', (req,res) =>{
        res.send(`
        <h2>Welcome to MSRIT</h2>
        <ul>
        <li><a href="/cse">CSE</a></li>
         <li><a href="/mech">Mech</a></li>
          <li><a href="/civil">Civil</a></li>
        </ul>
        `);
});

app.get('/cse', (req,res) =>{
        res.send(genPage(
                'Computer Science',
                'green',
                'Arial',
                'Focuses on programming, problem soling and data structures'));
});

app.get('/mech', (req,res) =>{
        res.send(genPage(
                'Mechanical',
                'brown',
                'Verdana',
                'Functioning of gears and automative components'
        ));
});

app.get('/civil', (req,res) =>{
        res.send(genPage(
                'Civil',
                'blue',
                'Times New Roman',
                'Building techniques and right materials'
        ));
});

app.listen(3000, () =>{
        console.log("Server running on 3000");
});


