const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Author = require('./models/author')

var app = express();

app.use(bodyParser.json());

app.post('/author',(request,response)=>{    
    var author = new Author(request.body)
    author.save((err,result)=>{
        if(err){
            console.log(err)
            return response.sendStatus(500).send({message:err})
        }
        return response.sendStatus(201)
    });
})

mongoose.connect('mongodb://"":""@ds347467.mlab.com:47467/teacherbase', 
{useNewUrlParser: true },err=>{
    if(!err){
        console.log("baglantı saglandı")
    }

});

app.listen(8080)
