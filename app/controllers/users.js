var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.index = function(req, res){
  console.log("List users");
  res.send("List users");
};

exports.create = function(req, res){
  console.log("Create user");
  res.send("Create user");
};

exports.show = function(req, res){
  console.log("Show user");
  res.send("Show user");
};

exports.update = function(req, res){
  console.log("Update user");
  res.send("Update user");
};

exports.destroy = function(req, res){
  console.log("Delete user");
  res.send("Delete user");
};
