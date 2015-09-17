var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RatingSchema = new Schema({
  user_name: {type: Schema.Types.ObjectId, ref: 'User'},
  rating: { type: Number },
  comment: { type: String },
  date: { type: Date }
})

var RestaurantSchema = new Schema({
  name: { type: String },
  phone_number: { type: String },
  address_1: { type: String },
  address_2: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  loc: { type: [Number], index: '2dsphere'},
  ratings: [RatingSchema]
})

var Restaurant = mongoose.model('Restaurant', RestaurantSchema, 'restaurants');
