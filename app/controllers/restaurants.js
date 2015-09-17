var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

exports.index = function(req, res){
  console.log("List restaurants");
  res.send("List restaurants");
};

exports.create = function(req, res){
  console.log("Create restaurant");
  res.send("Create restaurant");
};

exports.show = function(req, res){
  console.log("Show restaurant");
  res.send("Show restaurant");
};

exports.update = function(req, res){
  console.log("Update restaurant");
  res.send("Update restaurant");
};

exports.destroy = function(req, res){
  console.log("Delete restaurant");
  res.send("Delete restaurant");
};
