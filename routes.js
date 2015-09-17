require('./app/models/user');
require('./app/models/admin');
require('./app/models/restaurant');

// Load the route handlers
var userRoutes = require('./app/controllers/users');
var adminRoutes = require('./app/controllers/admins');
var restaurantRoutes = require('./app/controllers/restaurants');
var ratingRoutes = require('./app/controllers/ratings');

module.exports = function(app) {

  // user routes
  app.get('/users', userRoutes.index);
  app.post('/users/create', userRoutes.create);
  app.get('/users/:id', userRoutes.show);
  app.put('/users/:id', userRoutes.update);
  app.delete('/users/:id', userRoutes.destroy);

  // admin routes
  app.get('/admins', adminRoutes.index);
  app.post('/admins/create', adminRoutes.create);
  app.get('/admins/:id', adminRoutes.show);
  app.put('/admins/:id', adminRoutes.update);
  app.delete('/admins/:id', adminRoutes.destroy);

  // restaurant routes
  app.get('/restaurants', restaurantRoutes.index);
  app.post('/restaurants/create', restaurantRoutes.create);
  app.get('/restaurants/:id', restaurantRoutes.show);
  app.put('/restaurants/:id', restaurantRoutes.update);
  app.delete('/restaurants/:id', restaurantRoutes.destroy);

  // rating routes
  app.get('/restaurants/:id/ratings', ratingRoutes.index);
  app.post('/restaurants/:id/ratings/create', ratingRoutes.create);
  app.get('/restaurants/:id/ratings/:id', ratingRoutes.show);
  app.put('/restaurants/:id/ratings/:id', ratingRoutes.update);
  app.delete('/restaurants/:id/ratings/:id', ratingRoutes.destroy);
}
