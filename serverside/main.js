var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var app = express(bodyParser.json);

mongoose.connect('mongodb+srv://adalar:ugur321ada@cluster0-0hwtx.mongodb.net/test?retryWrites=true&w=majority',
err=>{
    if(!err){
        console.log("baglantı saglandı")
    }

});

app.listen(8082)
