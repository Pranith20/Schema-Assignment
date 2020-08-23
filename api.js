const express= require('express');
const User= require('../models/user');
const Product= require('../models/product');
const Category= require('../models/category');

const routes = express.Router();

routes.get('/users', (req, res) => {
    
    User.findById({req.id})
    .then(data =>{
        console.log(data);
        res.send("Made a GET Req");
        

    }
})

routes.post('/users', (req, res, next) => {
    console.log(req.body);
    User.findById({req.id})
    .then(data =>{
        console.log(data);
        res.send("Made a POST Req");
        

    }
})
routes.put('users', (req, res,next) => {
    User.findById({req.id})
    .then(data =>{
        console.log(data);
        res.send("Made a PUT Req");
        

    }
   
})

routes.delete('/users', (req, res,next) => {
    User.findById({req.id})
    .then(data =>{
        console.log(data);
        res.send("Made a DELETE Req");
        

    }
})

module.exports =routes;