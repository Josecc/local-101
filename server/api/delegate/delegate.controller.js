'use strict';

var _ = require('lodash');
var Delegate = require('./delegate.model');

// Get list of delegates
exports.index = function(req, res) {
  Delegate.find(function (err, delegates) {
    if(err) { return handleError(res, err); }
    return res.json(200, delegates);
  });
};

// Get a single delegate
exports.show = function(req, res) {
  Delegate.findById(req.params.id, function (err, delegate) {
    if(err) { return handleError(res, err); }
    if(!delegate) { return res.send(404); }
    return res.json(delegate);
  });
};

// Creates a new delegate in the DB.
exports.create = function(req, res) {
  Delegate.create(req.body, function(err, delegate) {
    if(err) { return handleError(res, err); }
    return res.json(201, delegate);
  });
};

// Updates an existing delegate in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Delegate.findById(req.params.id, function (err, delegate) {
    if (err) { return handleError(res, err); }
    if(!delegate) { return res.send(404); }
    var updated = _.merge(delegate, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, delegate);
    });
  });
};

// Deletes a delegate from the DB.
exports.destroy = function(req, res) {
  Delegate.findById(req.params.id, function (err, delegate) {
    if(err) { return handleError(res, err); }
    if(!delegate) { return res.send(404); }
    delegate.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}