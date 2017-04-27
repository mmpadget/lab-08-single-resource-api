'use strict';

const http = require('http');
const Router = require('./lib/router');
const storage = require('./lib/storage');
const LiveShow = require('./model/live-show'); // was >> KidToy ./model/kid-toys
const debug = require('debug')('http:server');
const PORT = process.env.PORT || 3000;

const router = new Router();
const server = module.exports = http.createServer(router.route());
// Yesterday we wrote: (function(req, res)). See cowsay and see the callback.
// We’re doing a switch and binding to the router so we have the routes GET…
// Now we have router that already has. Call that. Return callback.

// router is the instance, get is the method
// registering an endpoint and callback. Router.prototype.get.
// we’ve parsed the request and the query, we’re checking to see if the get request has an id key and a value.
// return value of fetchNote/fetchItem is a promise, should be able to call .then, give it callback.
// When we resolve, we are handing the note as a resolve. note parameter will be what’s sent in that resolve.
// res.write. Take note and return back to user in the response.
// can use JSON.parse, JSON.stringify. objects. Also parse for Url strings.

// TODO: GET request pass an ?id=<uuid> in the query string to retrieve a specific resource as json
router.get('/api/music', function(req, res) {
  debug('GET /api/music');
  if(req.url.query.id) {
    storage.fetchItem('music', req.url.query.id)
    .then(music => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(music));
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('not found');
      res.end();
    });
    return;
  }

  res.writeHead(400, {'Content-Type': 'text/plain'});
  res.write('bad request');
  res.end();
});

// TODO: POST request pass data as stringifed json in the body of a post request to create a resource.
router.post('/api/music', function(req, res) {
  debug('POST /api/music');
  console.log(req.body);
  try {
    let music = new LiveShow(req.body.artist, req.body.album, req.body.song);
    storage.createItem('music', music);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(music));
    res.end();
  } catch(e) {
    console.error(e);
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write('bad request');
    res.end();
  }
});

// TODO: DELETE request pass an ?id=<uuid> in the query string to delete a specific resource should return 204 status with no content in the body.
// delete is basically the same as GET with "delete"

// TODO: Server End Points /api/simple-resource-name

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
