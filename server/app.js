var express = require('express');
var bodyParser = require('body-parser');
var mongoose= require('mongoose');
var path = require('path');

var Dog = require('../models/dogpound');

var app=express();

mongoose.connect('mongodb://localhost:27017/dogsdb');

app.use(bodyParser.json());
app.use( express.static( 'public' ) );


app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

app.post('/createDog', function(req, res){
  console.log('Incoming! We just got a dog.');
  console.log("We have received '" + req.body.name + "', who is a " + req.body.breed + ".");

var newDog = new Dog({
  dogname: req.body.name,
  dogbreed: req.body.breed
});

newDog.save(function(err){
  if(err){
    console.log(err);
    res.sendStatus(500);
  } else{
    console.log('Dog saved successfully!');
    res.sendStatus(200);
  }
});

});




var server=app.listen(3000, function(){
  var port = server.address().port;
  console.log('Server now listening on port ', port);
});
