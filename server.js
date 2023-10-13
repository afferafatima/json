const express = require('express');
const Book = require("./books.js")
const mobiles=require("./books.js")
const shoes=require("./shoes.js")

const app = express();

const PORT = 3000;



app.listen(PORT,()=>{
    console.log("Server is at " + PORT);
})
app.get("/",(req,res)=>{
    res.json({mobiles})
})
app.get("/books",(req,res)=>{
    res.json({book})
})
app.get("/shoes",(req,res)=>{
    res.json({shoes})
})
app.get("/affera",(req,res)=>{
    res.send("affera fatima");
})
app.get("/fatima",(req,res)=>{
    res.send("Hello there!! I am Affera fatima");
    res.send("Hello there!! I am Affera fatima");
})