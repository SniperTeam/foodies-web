var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

exports.index = function(req, res){
  console.log("List ratings");
  res.send("List ratings");
};

exports.create = function(req, res){
  console.log("Create rating");
  res.send("Create rating");
};

exports.show = function(req, res){
  console.log("Show ratings");
  res.send("Show ratings");
};

exports.update = function(req, res){
  console.log("Update rating");
  res.send("Update rating");
};

exports.destroy = function(req, res){
  console.log("Delete rating");
  res.send("Delete rating");
};
