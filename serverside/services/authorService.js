const express = require('express');
const router = express.Router();

const Author = require('../models/author');





router.post('/add',(request,response)=>{    
    let author = new Author(request.body)
    author.save((err,result)=>{
        if(err){
            console.log(err)
            return response.sendStatus(500).send({message:err})
        }
        return response.sendStatus(201)
    });
})

router.get('/list',async(request,response)=>{
    let authors = await Author.find({},'-__v');
    response.send(authors)
})

var author = {router}

module.exports = author;