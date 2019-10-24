const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const  newBooks = new Schema({
     title:string,
     keyword:array,
     published : boolen
 });
 module.exports = mongoose.model('book',newBooks);