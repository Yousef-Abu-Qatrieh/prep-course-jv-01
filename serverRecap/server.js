'use strict';

const express = require('express');
const cors = require('cors');
const memesData = require('./data/data.json');

const server = express();
server.use(cors());

server.get('/',handelHomePage);
server.get('/memes',handelMemes);
server.get('*',handelNotFound);

function Meme(id,name,image,  tags, topText){
    this.id= id;
    this.name = name;
    this.image=image;
    this.tags = tags;
    this.topText = topText;
 }

function handelHomePage(req,res){
    res.status(200).send("welcome :) ");
}

function handelMemes(req,res){
   let memes = memesData.data.map(val =>{
       return new Meme(val.ID, val.name, val.image, val.tags, val.topText);
   });
    res.status(200).json(memes);
}

function handelNotFound(req,res){
   res.status(404).send('This page does not exist :/ ')
}


server.listen(3000, ()=>{
    console.log("listinig to port 3000");
})
