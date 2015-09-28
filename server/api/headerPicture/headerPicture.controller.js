'use strict';

var _ = require('lodash');
var HeaderPicture = require('./headerPicture.model');

// Get list of headerPictures
exports.index = function(req, res) {
  HeaderPicture.find(function (err, headerPictures) {
    if(err) { return handleError(res, err); }
    return res.json(200, headerPictures);
  });
};

// Get a single headerPicture
exports.show = function(req, res) {
  HeaderPicture.findById(req.params.id, function (err, headerPicture) {
    if(err) { return handleError(res, err); }
    if(!headerPicture) { return res.send(404); }
    return res.json(headerPicture);
  });
};

// Creates a new headerPicture in the DB.
exports.create = function(req, res) {
  HeaderPicture.create(req.body, function(err, headerPicture) {
    if(err) { return handleError(res, err); }
    return res.json(201, headerPicture);
  });
};

// Updates an existing headerPicture in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  HeaderPicture.findById(req.params.id, function (err, headerPicture) {
    if (err) { return handleError(res, err); }
    if(!headerPicture) { return res.send(404); }
    var updated = _.merge(headerPicture, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, headerPicture);
    });
  });
};

// Deletes a headerPicture from the DB.
exports.destroy = function(req, res) {
  HeaderPicture.findById(req.params.id, function (err, headerPicture) {
    if(err) { return handleError(res, err); }
    if(!headerPicture) { return res.send(404); }
    headerPicture.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}