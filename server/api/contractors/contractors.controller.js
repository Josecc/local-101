'use strict';

var _ = require('lodash');
var Contractors = require('./contractors.model');

// Get list of contractorss
exports.index = function(req, res) {
  Contractors.find(function (err, contractorss) {
    if(err) { return handleError(res, err); }
    return res.json(200, contractorss);
  });
};

// Get a single contractors
exports.show = function(req, res) {
  Contractors.findById(req.params.id, function (err, contractors) {
    if(err) { return handleError(res, err); }
    if(!contractors) { return res.send(404); }
    return res.json(contractors);
  });
};

// Creates a new contractors in the DB.
exports.create = function(req, res) {
  Contractors.create(req.body, function(err, contractors) {
    if(err) { return handleError(res, err); }
    return res.json(201, contractors);
  });
};

// Updates an existing contractors in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Contractors.findById(req.params.id, function (err, contractors) {
    if (err) { return handleError(res, err); }
    if(!contractors) { return res.send(404); }
    var updated = _.merge(contractors, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, contractors);
    });
  });
};

// Deletes a contractors from the DB.
exports.destroy = function(req, res) {
  Contractors.findById(req.params.id, function (err, contractors) {
    if(err) { return handleError(res, err); }
    if(!contractors) { return res.send(404); }
    contractors.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}