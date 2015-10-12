'use strict';

var _ = require('lodash');
var ClassesDoc = require('./classesDoc.model');
var fs = require('fs');

// Get list of classesDocs
exports.index = function(req, res) {
  fs.stat('./../../../client/assets/documents/classes.pdf', function(e, stats) {
    if(e) throw e;

    var stream = fs.createReadStream( './some-pdf.pdf' );

    res.setHeader('Content-disposition', 'inline; filename="some-pdf.pdf"');
    res.setHeader('Content-Length', stats.size);
    res.setHeader('Content-type', 'application/pdf');

    stream.pipe(res);
  });
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