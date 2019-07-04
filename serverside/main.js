var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Author = require('./models/author')

var app = express();

app.use(bodyParser.json)

app.post('/author',(request,response)=>{    
    var author = new Author(request.body)
    author.save((err,result)=>{
        if(err){
            console.log(err)
            return response.status(500).send({message:err})
        }
        response.status(201)
    });
})

mongoose.connect('mongodb+srv://"":""@cluster0-0hwtx.mongodb.net/test?retryWrites=true&w=majority',
err=>{
    if(!err){
        console.log("baglantı saglandı")
    }

});

app.listen(8082)
