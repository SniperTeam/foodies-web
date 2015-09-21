var should = require('chai').should();
expect = require('chai').expect;
supertest = require('supertest'),
api = supertest('http://localhost:3000');

describe('Admin', function() {
  var adminID;

  before(function(done) {
    var admin = {
      first_name: "Bob",
      last_name: "Smith",
      user_name: "bsmith",
      password: "abc"
    }
    api.post('/admins')
    .set('Accept', 'application/json')
    .send(admin)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      expect(res.body.message).to.equal('Admin successfully created!');
      done();
    });
  })

  it('should respond with admins', function(done) {
    api.get('/admins')
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      expect(res.body[0].first_name).to.equal('Bob');
      expect(res.body[0].last_name).to.equal('Smith');
      adminID = res.body[0]._id;
      done();
    });
  })

  it('should respond with an admin', function(done) {
    api.get('/admins/' + adminID)
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      expect(res.body.first_name).to.equal('Bob');
      expect(res.body.last_name).to.equal('Smith');
      expect(res.body.user_name).to.equal('bsmith');
      expect(res.body.password).to.equal('abc');
      done();
    });
  })

  it('should update an admin', function(done) {
    var admin = {
      first_name: "Bob",
      last_name: "Smith",
      user_name: "bsmith",
      password: "def"
    }
    api.put('/admins/' + adminID)
    .set('Accept', 'application/json')
    .send(admin)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      expect(res.body.message).to.equal('Admin successfully updated!');
      done();
    });
  })

  it('should respond with a modified admin', function(done) {
    api.get('/admins/' + adminID)
    .set('Accept', 'application/x-www-form-urlencoded')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      expect(res.body.first_name).to.equal('Bob');
      expect(res.body.last_name).to.equal('Smith');
      expect(res.body.user_name).to.equal('bsmith');
      expect(res.body.password).to.equal('def');
      done();
    });
  })

  it('should delete an admin', function(done) {
    api.delete('/admins/' + adminID)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      expect(res.body.message).to.equal('Admin successfully deleted!');
      done();
    });
  })
})
