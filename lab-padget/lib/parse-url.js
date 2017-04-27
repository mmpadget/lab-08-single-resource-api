'use strict';

const debug = require('debug')('http:parse-url');
const parseUrl = require('url').parse;
const parseQuery = require('querystring').parse;

// return Promise.resolve(req) // an explicit resolve.
// promise.all, think of an array of objects. Aggregate so it returns a promise.
// Async run and wait until all the arrays finish, then hand into .catch.
module.exports = function(req) {
  debug('#parse-url');
  req.url = parseUrl(req.url);
  req.url.query = parseQuery(req.url.query);
  return Promise.resolve(req);
};
// parseUrl(‘http://google.com/apps?text=hello&name=scott')
// Url {
//   protocol: ‘http:’,
//   host: ‘google.com',
//   etc…
// }
