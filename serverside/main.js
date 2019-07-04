const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());


mongoose.connect('mongodb://adalar:a123fff@ds347467.mlab.com:47467/teacherbase', 
{useNewUrlParser: true },err=>{
    if(!err){
        console.log("baglantı saglandı")
    }

});

app.listen(8080)
