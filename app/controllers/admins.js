var mongoose = require('mongoose');
var Admin = mongoose.model('Admin');

exports.index = function(req, res){
  console.log("List admins");
  res.send("List admins");
};

exports.create = function(req, res){
  console.log("Create admin");
  res.send("Create admin");
};

exports.show = function(req, res){
  console.log("Get admin");
  res.send("Get admin");
};

exports.update = function(req, res){
  console.log("Update admin");
  res.send("Update admin");
};

exports.destroy = function(req, res){
  console.log("Delete admin");
  res.send("Delete admin");
};
