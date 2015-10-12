'use strict';

var _ = require('lodash');
var ClassesDoc = require('./classesDoc.model');
var fs = require('fs');

// Get list of classesDocs
exports.index = function(req, res) {
  var stream =  '/Users/fonderjose/Projects/UBC/local-101/client/assets/documents/classes.pdf';
  res.setHeader('content-type','application/pdf');
    res.download(stream);
};

// Get a single classesDoc
exports.show = function(req, res) {
  ClassesDoc.findById(req.params.id, function (err, classesDoc) {
    if(err) { return handleError(res, err); }
    if(!classesDoc) { return res.send(404); }
    return res.json(classesDoc);
  });
};

// Creates a new classesDoc in the DB.
exports.create = function(req, res) {
  ClassesDoc.create(req.body, function(err, classesDoc) {
    if(err) { return handleError(res, err); }
    return res.json(201, classesDoc);
  });
};

// Updates an existing classesDoc in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ClassesDoc.findById(req.params.id, function (err, classesDoc) {
    if (err) { return handleError(res, err); }
    if(!classesDoc) { return res.send(404); }
    var updated = _.merge(classesDoc, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, classesDoc);
    });
  });
};

// Deletes a classesDoc from the DB.
exports.destroy = function(req, res) {
  ClassesDoc.findById(req.params.id, function (err, classesDoc) {
    if(err) { return handleError(res, err); }
    if(!classesDoc) { return res.send(404); }
    classesDoc.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}