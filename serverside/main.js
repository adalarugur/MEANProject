const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const author = require('./services/authorService')
var app = express();

app.use(bodyParser.json());


mongoose.connect('mongodb://adalar:a123fff@ds347467.mlab.com:47467/teacherbase', {
  useNewUrlParser: true
}, err => {
  if (!err) {
    console.log("baglantı saglandı")
  }

});

app.use('/author', author.router)

app.listen(8080)
