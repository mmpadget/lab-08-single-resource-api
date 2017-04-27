'use strict';

const debug = require('debug')('http:live-show'); // was >> http:kid-toy
console.log(debug);
const uuid = require('uuid/v4');

module.exports = function(artist, album, song) {
  if(!artist || !album) throw new Error('Invalid arguments');
  this.artist = artist; // was >> name
  this.album = album; // was >> type
  this.song = song; // was >> hazard
  this.id = uuid();
};
