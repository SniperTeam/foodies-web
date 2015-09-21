var http = require('http');
var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.set('port', (process.env.PORT || 3000));

// Pass the Express instance to the routes module
var routes = require('./routes')(app);

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/foodiestest');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Mongoose connected');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
