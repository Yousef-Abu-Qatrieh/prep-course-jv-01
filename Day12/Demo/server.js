'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT;

const server = express();
server.use(cors());

server.get('/',handleHomePage);
server.get('/recipes',recipesHandler);
server.get('/searchRecipes',searchRecipesHandler);
server.use('*',notFoundHandler);
// server.use(errorHandler)


function Recipe(id, title, readyInMinutes, summary, vegetarian, instructions, sourceUrl, image){
    this.id = id;
    this.title = title;
    this.readyInMinutes = readyInMinutes;
    this.summary = summary;
    this.vegetarian = vegetarian;
    this.instructions = instructions;
    this.sourceUrl = sourceUrl;
    this.image = image;
}

let numberOfRecipes=5;
let userSearch = "pasta";
let url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.APIKEY}&number=${numberOfRecipes}`;


function handleHomePage(req,res){
    res.status(200).send("Welcome :) ");
}

function recipesHandler(req,res){
    let newArr = [];
    axios.get(url)
     .then((result)=>{
        // console.log(result.data.recipes);
        // let recipes = result.data.recipes.map(recipe =>{
        //     return new Recipe(recipe.id,recipe.title,recipe.readyInMinutes,recipe.summary,recipe.vegetarian,recipe.instructions,recipe.sourceUrl,recipe.image);
        // });
        result.data.recipes.forEach(recipe =>{
            newArr.push(new Recipe(recipe.id,recipe.title,recipe.readyInMinutes,recipe.summary,recipe.vegetarian,recipe.instructions,recipe.sourceUrl,recipe.image));
        })
        res.status(200).json(newArr);

    }).catch((err)=>{

    })
}

function searchRecipesHandler(req,res){
    let url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.APIKEY}&number=${numberOfRecipes}&query=${userSearch}`;

    axios.get(url)
    .then(result=>{
        // console.log(result.data.recipes);
        let recipes = result.data.recipes.map(recipe =>{
            return new Recipe(recipe.id,recipe.title,recipe.readyInMinutes,recipe.summary,recipe.vegetarian,recipe.instructions,recipe.sourceUrl,recipe.image);
        });
        res.status(200).json(recipes);  
     }).catch(err=>{

    })
}

function notFoundHandler(req,res){
   res.status(404).send("This page is not found")
}

// function errorHandler (){}



server.listen(PORT,()=>{
    console.log(`listining to port ${PORT}`)
})