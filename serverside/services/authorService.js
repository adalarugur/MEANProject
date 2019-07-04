const express = require('express');
const router = express.router;

const Author = require('../models/author');





router.post('/author',(request,response)=>{    
    let author = new Author(request.body)
    author.save((err,result)=>{
        if(err){
            console.log(err)
            return response.sendStatus(500).send({message:err})
        }
        return response.sendStatus(201)
    });
})

router.get('/author',async(request,response)=>{
    let authors = await Author.find({},'-__v');
    response.send(authors)
})
