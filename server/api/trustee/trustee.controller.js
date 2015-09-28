'use strict';

var _ = require('lodash');
var Trustee = require('./trustee.model');

// Get list of trustees
exports.index = function(req, res) {
  Trustee.find(function (err, trustees) {
    if(err) { return handleError(res, err); }
    return res.json(200, trustees);
  });
};

// Get a single trustee
exports.show = function(req, res) {
  Trustee.findById(req.params.id, function (err, trustee) {
    if(err) { return handleError(res, err); }
    if(!trustee) { return res.send(404); }
    return res.json(trustee);
  });
};

// Creates a new trustee in the DB.
exports.create = function(req, res) {
  Trustee.create(req.body, function(err, trustee) {
    if(err) { return handleError(res, err); }
    return res.json(201, trustee);
  });
};

// Updates an existing trustee in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Trustee.findById(req.params.id, function (err, trustee) {
    if (err) { return handleError(res, err); }
    if(!trustee) { return res.send(404); }
    var updated = _.merge(trustee, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, trustee);
    });
  });
};

// Deletes a trustee from the DB.
exports.destroy = function(req, res) {
  Trustee.findById(req.params.id, function (err, trustee) {
    if(err) { return handleError(res, err); }
    if(!trustee) { return res.send(404); }
    trustee.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}