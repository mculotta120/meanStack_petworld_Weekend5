var mongoose = require('mongoose');  // require mongoose for mongo db

var ourSchema = new mongoose.Schema({  // set up new mongoose schema
  pet_name: String,
  type: String,
  age: Number,
  photo: String
});

var petscollection = mongoose.model( 'petscollection', ourSchema );  // sets schema to model var

module.exports=petscollection;
