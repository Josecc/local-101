'use strict';

var _ = require('lodash');
var Boycott = require('./boycott.model');

// Get list of boycotts
exports.index = function(req, res) {
  Boycott.find(function (err, boycotts) {
    if(err) { return handleError(res, err); }
    return res.json(200, boycotts);
  });
};

// Get a single boycott
exports.show = function(req, res) {
  Boycott.findById(req.params.id, function (err, boycott) {
    if(err) { return handleError(res, err); }
    if(!boycott) { return res.send(404); }
    return res.json(boycott);
  });
};

// Creates a new boycott in the DB.
exports.create = function(req, res) {
  Boycott.create(req.body, function(err, boycott) {
    if(err) { return handleError(res, err); }
    return res.json(201, boycott);
  });
};

// Updates an existing boycott in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Boycott.findById(req.params.id, function (err, boycott) {
    if (err) { return handleError(res, err); }
    if(!boycott) { return res.send(404); }
    var updated = _.merge(boycott, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, boycott);
    });
  });
};

// Deletes a boycott from the DB.
exports.destroy = function(req, res) {
  Boycott.findById(req.params.id, function (err, boycott) {
    if(err) { return handleError(res, err); }
    if(!boycott) { return res.send(404); }
    boycott.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}