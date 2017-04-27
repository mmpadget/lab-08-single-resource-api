'use strict';

// We’ll have a key value system for schemaOne and schemaTwo with ids.
// When we create a note model, schemaOne will be note
// Second model would be users, schemaTwo, instances keyed to their unique ids.
const debug = require('debug')('http:storage');
const storage = {};

// A controller function, we’ll create a route that will create a new note object. We’re encapsulating in this function so we have access elsewhere.
module.exports = exports = {};

// If no schema, return reject with error. Schema is like a category.
// If no storage key, then create with new object {}
// Create note/item and set it into storage. On server restart it’s cleared.
// Local storage is a front end thing, so we aren’t going to use it here.
// Bracket notation for objects; dynamically set a new property on object.
// When we hand in a note, it will already have a note.id.
// return Promise.resolve(item).
exports.createItem = function(schema, item) {
  debug('#createItem');

  if(!schema) return Promise.reject(new Error('schema required'));
  if(!item) return Promise.reject(new Error('item required'));
  if(!storage[schema]) storage[schema] = {};

  storage[schema][item.id] = item;

  return Promise.resolve(item);
};

// Return new promise.
// Will get us one instance of a note.
// Need schema name and id so we can look it up.
// Error handling and schema checking.
// Note = schema[id]
// Handling more errors.
exports.fetchItem = function(schema, id) {
  debug('#fetchItem');

  return new Promise((resolve, reject) => {
    if(!schema) return reject(new Error('schema required'));
    if(!id) return reject(new Error('id required'));

    let schemaName = storage[schema];
    if(!schemaName) return reject(new Error('schema not found'));

    let item = schemaName[id];
    if(!item) return reject(new Error('item not found'));

    resolve(item);
  });
};

exports.putItem = function(schema, item, artist, album, song) {
  debug('#putItem');

  if(!schema) return Promise.reject(new Error('schema required'));
  if(!item) return Promise.reject(new Error('item required'));
  if(!storage[schema]) storage[schema] = {};

  storage[schema][item.id] = item;
  if(artist) item.artist = artist;
  if(album) item.album = album;
  if(song) item.song = song;
  return Promise.resolve(item);
};

exports.deleteItem = function(schema, id) {
  debug('#deleteItem');

  return new Promise((resolve, reject) => {
    if(!schema) return reject(new Error('schema required'));
    if(!id) return reject(new Error('id required'));

    let schemaName = storage[schema];
    if(!schemaName) return reject(new Error('schema not found'));

    let item = schemaName[id];
    if(!item) return reject(new Error('item not found'));

    delete(schemaName[id]); // delete object
    resolve(item); // or nothing
  });
};
