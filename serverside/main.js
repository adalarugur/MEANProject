var express = require('express')
var mongoose = require('mongoose')

var app = express();

mongoose.connect('mongodb+srv://adalar:ugur321ada@cluster0-0hwtx.mongodb.net/test?retryWrites=true&w=majority',
err=>{
    if(!err){
        console.log("baglantı saglandı")
    }

});

app.listen(8082)
