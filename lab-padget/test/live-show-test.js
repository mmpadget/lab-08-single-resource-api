'use strict';

const server = require('../server');
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;

chai.use(http);

// TODO: your tests should start your server when they begin and stop your server when they finish write a test to ensure that your api returns a status code of 404 for routes that have not been registered.
describe('Server module', function() {
  before(done => {
    server.listen(3000);
    done();
  });

// TODO: write tests to ensure your /api/simple-resource-name endpoint responds as described for each condition below:

// ### POST TESTS ###

  // TODO: POST - test 400, responds with 'bad request' for if no `body provided` or invalid body
  // TODO: POST - test 201, response body like  {<data>} for a post request with a valid body
  describe('POST method', function() {
    describe('/ endpoint', function() {
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
        .post('/undefined')
        .send({})
        .end(function(err, res) {
          if(err) console.error(err.message);
          expect(res.status).to.equal(400);
          done();
        });
      });
    });

// ### GET TESTS ###

    // TODO: GET - test 200, response body like {<data>} for a request made with a valid id
    // TODO: GET - test 404, responds with not found for valid request made with an id that was not found
    describe('/music endpoint', function() {
      it('should respond with a 200 on proper request', done => {
        chai.request(server)
        .post('/music')
        .send({text: 'hello world'})
        .end(function(err, res) {
          if(err) console.error(err.message);
          console.log('Log of POST 200 ', res.status);
          expect(res.status).to.equal(200);
          done();
        });
      });
    });
  });

  describe('GET method', function() {
    // describe('/ endpoint', function() {
    //   it('should respond with a 400 on bad request', done => {
    //
    //     done();
    //   });
    // });
    describe('/music endpoint', function() {
      it('should respond with a 200 on proper request', done => {
        chai.request(server)
        .get('/music')
        .query({text: 'text'})
        .end(function(err, res) {
          if(err) console.error(err);
          console.log('Log of POST 200 ', res.status);
          // expect(res.status).to.equal(200);
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
      });
      // it('should respond with a 400 on bad request', done => {
      //
      //   done();
      // });
    });
  });

  // ### PUT TESTS ###

  // TODO: PUT - test 400, responds with 'bad request' for if no `body provided` or invalid body
  // TODO: PUT - test 202, response body like  {<data>} for a put request with a valid  id

  // ### DELETE TESTS ###

  // TODO: DELETE - test 404, responds with 'not found' for valid request made with an id that was not found
  // TODO: DELETE - test 204, response for a delete request with a valid id

  after(done => {
    server.close();
    done();
  });
});
