//Using Node.js, Express, and MongoDB, build a product management system with the following requirements:
//Accept product details: Product_ID, Name, Price, Discount, and Stock from a web form.
//On insertion, calculate the Final Price using the formula: Final_Price = Price (Price X Discount / 100) and store it along with the product details in MongoDB.
//Implement a GET route to display all products where the Final_Price is less than 1000.

const express=require('express');
const {MongoClient}=require('mongodb');
const app=express();
const path=require('path');
const url='mongodb://127.0.0.1:27017';

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) =>{
        res.sendFile(path.join(__dirname, '8b.html'));
});

app.post('/submit', async(req,res) =>{
        const {id, name, price, disc, stock} = req.body;
        const numprice=parseFloat(price);
        const numdisc=parseFloat(disc);
        const numfinal=numprice - ((numprice*numdisc)/100);

        const client=await MongoClient.connect(url);;
        const db=client.db('8b');
        const collection=db.collection('products');
        await collection.insertOne({id, name, price:numprice, disc: numdisc, stock, numfinal});
        const all=await collection.find().toArray();
        await client.close();

        res.send(`
        <h2>Product Details Submitted</h2>
        <h3>All Products</h3>
        ${all.map(p=>`<li>${p.id} ${p.name} ${p.price} ${p.disc} ${p.stock} ${p.numfinal}</li>`).join()}
        `);
});

app.get('/filter', async(req,res) =>{
        const client=await MongoClient.connect(url);
        const db=client.db('8b');
        const collection=db.collection('products');
        const cheap=await collection.find({numfinal:{$lt:1000}}).toArray();
        await client.close();

        res.send(`
        <h2>Products < 1000</h2>
        ${cheap.map(p=>`<li>ID:${p.id} Name:${p.name} Final Price:${p.numfinal}</li>`).join()}
        `);
});

app.listen(3000, () => {
        console.log("Server running on 3000");
});
