'use strict';

// Requiring debug module which is a function.
// So we can call it and give an immediate argument to define and identify what our app is doing.
// We see this as a heading in debug mode.
const debug = require('debug')('http:parse-url');
const parseUrl = require('url').parse;
// object on the export. binding just this one method to the variable here.
const parseQuery = require('querystring').parse;

// return Promise.resolve(req) // an explicit resolve.
// promise.all, think of an array of objects. Aggregate so it returns a promise.
// Async run and wait until all the arrays finish, then hand into .catch.
module.exports = function(req) {
  // Requiring debug module which is a function.
  debug('#parse-url'); // for debugging the server.
  req.url = parseUrl(req.url); // created url object.
  req.url.query = parseQuery(req.url.query); // get it's query property, string.
  return Promise.resolve(req); // assign key: value to req. return to promise resolve.
};

// parseUrl(‘http://google.com/apps?text=hello&name=scott')
// Url {
//   protocol: ‘http:’,
//   host: ‘google.com',
//   etc…
// }
