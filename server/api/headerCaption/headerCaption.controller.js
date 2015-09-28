'use strict';

var _ = require('lodash');
var HeaderCaption = require('./headerCaption.model');

// Get list of headerCaptions
exports.index = function(req, res) {
  HeaderCaption.find().sort({'date': -1}).limit(4).exec(function (err, headerCaptions) {
    if(err) { return handleError(res, err); }
    return res.json(200, headerCaptions);
  });
};

// Get a single headerCaption
exports.show = function(req, res) {
  HeaderCaption.findById(req.params.id, function (err, headerCaption) {
    if(err) { return handleError(res, err); }
    if(!headerCaption) { return res.send(404); }
    return res.json(headerCaption);
  });
};

// Creates a new headerCaption in the DB.
exports.create = function(req, res) {
  HeaderCaption.create(req.body, function(err, headerCaption) {
    if(err) { return handleError(res, err); }
    return res.json(201, headerCaption);
  });
};

// Updates an existing headerCaption in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  HeaderCaption.findById(req.params.id, function (err, headerCaption) {
    if (err) { return handleError(res, err); }
    if(!headerCaption) { return res.send(404); }
    var updated = _.merge(headerCaption, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, headerCaption);
    });
  });
};

// Deletes a headerCaption from the DB.
exports.destroy = function(req, res) {
  HeaderCaption.findById(req.params.id, function (err, headerCaption) {
    if(err) { return handleError(res, err); }
    if(!headerCaption) { return res.send(404); }
    headerCaption.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}