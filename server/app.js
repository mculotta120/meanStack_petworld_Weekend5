var express = require('express');  // require express
var app=express();

var path = require('path');  // sets up basic path

var bodyParser = require('body-parser');  // require bodyparser for POST calls

var petscollection=require('../models/pets.js');  // requiring the assignments model
var mongoose = require('mongoose');  // require mongoose for mongo db

app.use( bodyParser.json() );

mongoose.connect('localhost:/27017/petsdb');
app.get( '/', function( req, res ){    // set basic url
  res.sendFile( path.resolve( 'views/index.html' ) );
});

app.get( '/getpets', function( req, res ){  // GET function to retrieve data
  petscollection.find() // This is where the magic happens - all new and existing are found here
  .then( function( data ){  // similar to ajax get call - if found, then run function with data as parameter
    console.log("data from app" + data);
    res.send( data );  // returns records as "data"
  });
});

app.listen( 8080, 'localhost', function( req, res ){ // spins up server
  console.log( 'listening on 8080' );
});

app.post( '/testPost', function( req, res ){  // POST call
  var recordToAdd={  // adds record from input
    pet_name: req.body.pet_name,
    type: req.body.type,
    age: req.body.age,
    photo: req.body.photo
  };
  var newRecord=petscollection( recordToAdd );  // saves record to database
  newRecord.save();
});

app.post( '/deletePost', function( req, res ){  // POST call
  var petToDelete={
  id: req.body.id
  };
  if(err){
    console.log(err);
    res.sendStatus(500);
  }else{
    console.log("success");
    res.sendStatus(200);
  }
  // var deleteRecord=petscollection(  petToDelete );
  // deleteRecord.remove();
});
app.use( express.static( 'public' ) );
