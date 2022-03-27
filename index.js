const express = require("express");
const app=express();
app.use(express.static('main'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const mongoose=require('mongoose');
const { string } = require("querystring");
mongoose.connect('mongodb+srv://devivaraprasad:dsp9391@cluster0.syjej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const connection=mongoose.connection;




app.get('/',function(req,res){
    res.sendFile(__dirname+'/pages/index.html')
});
app.get("/about",(req,res)=>{
    res.sendFile(__dirname+'/pages/about.html')
});
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+'/pages/contact.html')
});
app.get("/projectShow",(req,res)=>{
    res.sendFile(__dirname+'/pages/projectShow.html')
});
app.get("/home",(req,res)=>{
    res.redirect('/')
});
app.listen(3000,()=>console.log('started!!'));