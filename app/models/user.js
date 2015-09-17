var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  user_name: { type: String },
  password: { type: String }
})

var RestaurantModel = mongoose.model('User', UserSchema, 'users');
