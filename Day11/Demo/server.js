'use strict';

// npm init -y 
// npm i express
// npm i cors 
// npm i express cors

const data = require('./data.json');

// use the packages ?
const express = require('express');
const cors = require('cors');

// creating a server 
const server = express();
server.use(cors());

server.get('/', handelGet ) //localhost:3000
server.get('/user', handelUserGet) //localhost:3000/user
server.get('/memes',handelData) //localhost:3000/memes
server.get('*',handelNotFound);


function Meme(id,name,image,  tags, topText){
   this.id= id;
   this.name = name;
   this.image=image;
   this.tags = tags;
   this.topText = topText;
}

// function handelGet(req,res){
function handelGet(request,response){
    console.log("test");
   return response.status(200).send("Welcome to my website")
}

function handelUserGet(req,res){
    return res.status(200).send("Hello world");
}


function handelData(req,res){
    let memes = [];
    data.data.forEach(val=>{
        let obj = new Meme(val.ID, val.name, val.image, val.tags, val.topText);
        memes.push(obj);
    })
    return res.status(200).json(memes);
}


function handelNotFound(req,res){
    res.status(404).send('This page does not exist :/ ')
 }
 
 

// run the server 
// port = 3000
server.listen(3000,()=>{
    console.log("my server is listining to port 3000");
})







// ctrl + c => stop the server 
// npm start => start the server 