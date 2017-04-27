'use strict';

const debug = require('debug')('http:parser-json');

// req.on, try, catch.
// Try resolving body parse.
// If error reject errror. When we do a reject, it falls into .catch.
// If error we hand to request that gets handed to catch. Returning the errror in a way.
// Return successfully or return the failure.
// return; don’t resolve at the end

module.exports = function(req) {
  return new Promise((resolve, reject) => {
    // we can place debug statements as if they were console logs.
    // we’ll get a log in the terminal that says log:module name.
    debug('#parser-json');

    if(req.method === 'POST' || req.method === 'PUT') {
      let body = '';

      req.on('data', data => body += data.toString());
      req.on('end', () => {
        try {
          req.body = JSON.parse(body);
          resolve(req);
        } catch(e) {
          console.error(e);
          reject(e);
        }
      });

      req.on('error', err => {
        console.error(err);
        reject(err);
      });
      return;
    }
    resolve();
  });
};
