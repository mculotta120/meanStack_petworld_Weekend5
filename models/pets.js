var mongoose = require('mongoose');  // require mongoose for mongo db
var Schema = mongoose.Schema;

var petSchema = new mongoose.Schema({  // set up new mongoose schema
  pet_name: String,
  type: String,
  age: Number,
  photo: String
});

var petscollection = mongoose.model( 'petscollection', petSchema );  // sets schema to model var

module.exports=petscollection;
