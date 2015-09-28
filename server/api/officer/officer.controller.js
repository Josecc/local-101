'use strict';

var _ = require('lodash');
var Officer = require('./officer.model');

// Get list of officers
exports.index = function(req, res) {
  Officer.find(function (err, officers) {
    if(err) { return handleError(res, err); }
    return res.json(200, officers);
  });
};

// Get a single officer
exports.show = function(req, res) {
  Officer.findById(req.params.id, function (err, officer) {
    if(err) { return handleError(res, err); }
    if(!officer) { return res.send(404); }
    return res.json(officer);
  });
};

// Creates a new officer in the DB.
exports.create = function(req, res) {
  Officer.create(req.body, function(err, officer) {
    if(err) { return handleError(res, err); }
    return res.json(201, officer);
  });
};

// Updates an existing officer in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Officer.findById(req.params.id, function (err, officer) {
    if (err) { return handleError(res, err); }
    if(!officer) { return res.send(404); }
    var updated = _.merge(officer, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, officer);
    });
  });
};

// Deletes a officer from the DB.
exports.destroy = function(req, res) {
  Officer.find({position: req.params.position}, function (err, officer) {
    if(err) { return handleError(res, err); }
    if(!officer || officer.length == 0) { return res.send(404); }
    officer[0].remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}