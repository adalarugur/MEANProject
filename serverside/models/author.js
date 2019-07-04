const mongoose = require('mongoose');

var authorSchema = new mongoose.Schema({
    email:String,
    firstName:String,
    lastName:String,
    bio:String
})

module.exports = mongoose.model('Author',authorSchema)