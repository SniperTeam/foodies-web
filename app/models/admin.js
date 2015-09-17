var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  user_name: { type: String },
  password: { type: String }
})

var Admin = mongoose.model('Admin', AdminSchema, 'admins');
