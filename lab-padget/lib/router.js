'use strict';

// Looking under hood of express. Helps you direct traffic. Similar to a controller.
// The controller that says: here’s a get, post, delete methods
// As you define routes /cowsay. Router will bind all these things together.
// callback(req, res) and route are two arguments bound to object we’re going to create.
//
// Routes property is an object littoral and that object will have for keys: get, post, put, delete.
//
// Prototype methods: a method for each of those Http methods.

const parseJson = require('./parse-json');
const parseUrl = require('./parse-url');
const debug = require('debug')('http:router');

const Router = module.exports = function() {
  debug('#Router');
  this.routes = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
  };
};
// In our routes definition in the server (in express app.get) app is an instance of express.
// Creating an instance. Give endpoint or route, then a callback, assigned as key to get object in the routers routes property.
// The endpoint becomes the key to the callback!
// When we define a new route, it will be bound to this object as a key value pair. Key is the endpoint the value is the callback.
Router.prototype.get = function(endpoint, callback) {
  debug('#GET');
  this.routes.GET[endpoint] = callback;
};

Router.prototype.post = function(endpoint, callback) {
  debug('#POST');
  this.routes.POST[endpoint] = callback;
};

Router.prototype.put = function(endpoint, callback) {
  debug('#PUT');
  this.routes.PUT[endpoint] = callback;
};

Router.prototype.delete = function(endpoint, callback) {
  debug('#DELETE');
  this.routes.DELETE[endpoint] = callback;
};

// NOTE: this is a dynamic alternative to the four proto methods defined above
// ['get', 'post', 'put', 'delete'].forEach(verb => {
//   Router.prototype[verb] = function(endpoint, callback) {
//     this.routes[verb.toUpperCase()][endpoint] = callback
//   }
// })

// When the server starts, this function will be our call back to our server. We’re going to setup any request and response to be passed into this callback handed into parse json and parse url. We’re handing these in as promises, promise.all, give it an array. Wait for all promise transactions to be closed before calling .then.
//
// In the request: routes, method, pathname. If it exists and has type of function, we’re going to do something. this.routes … because it’s a function, we can call it.
//
// We want to eventually understand what’s happening in frame work of express or similar.
//
// If that works, stop executing, otherwise writeHead 404.
// res.end().
//
// Catch block. If we have an error res.writeHead 400, bad request.
//
// Giving us similar functionality to how we wrote our server yesterday, but we are abstracting our route into a different place (than yesterday).
Router.prototype.route = function() {
  debug('#routes');
  return (req, res) => {
    Promise.all([
      parseUrl(req),
      parseJson(req),
    ])
    .then(() => {
      if(typeof this.routes[req.method][req.url.pathname] === 'function') {
        this.routes[req.method][req.url.pathname](req, res);
        return;
      }

      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('route not found');
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.write('bad request');
      res.end();
    });
  };
};
