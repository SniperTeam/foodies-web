var mongoose = require('mongoose');
var Admin = mongoose.model('Admin');

exports.index = function(req, res){
  Admin.find(function(err, admins) {
      if (err)
          res.send(err);

      res.json(admins);
  });
};

exports.create = function(req, res){
  var jsonString = '';

  req.on('data', function (data) {
    jsonString += data;
  });

  req.on('end', function () {
    objJSON = JSON.parse(jsonString);

    var admin = new Admin({
      first_name: objJSON.first_name,
      last_name: objJSON.last_name,
      user_name: objJSON.user_name,
      password: objJSON.password
    });

    admin.save(function (err) {
      if (err)
        res.send(err);

      res.json({ message: 'Admin successfully created!' });
    });
  });
};

exports.show = function(req, res){
  Admin.findById(req.params.id, function(err, admin) {
      if (err)
        res.send(err);

      res.json(admin);
  });
};

exports.update = function(req, res){
  var jsonString = '';

  req.on('data', function (data) {
    jsonString += data;
  });

  req.on('end', function () {
    objJSON = JSON.parse(jsonString);

    var admin = {
      first_name: objJSON.first_name,
      last_name: objJSON.last_name,
      user_name: objJSON.user_name,
      password: objJSON.password
    };

    Admin.findByIdAndUpdate(req.params.id, admin, function(err, admin) {
        if (err)
          res.send(err);

        res.json({ message: 'Admin successfully updated!' });
    });
  });
};

exports.destroy = function(req, res){
  Admin.findById(req.params.id, function(err, admin) {
      if (err)
          res.send(err);

      admin.remove(function(err) {
          if (err)
              res.send(err);

          res.json({ message: 'Admin successfully deleted!' });
      });
  });
};
