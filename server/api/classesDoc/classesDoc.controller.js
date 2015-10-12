'use strict';

var _ = require('lodash');
var ClassesDoc = require('./classesDoc.model');
var fs = require('fs');
var formidable = require('formidable');
var config = require('../../config/environment');
var util = require('util');

// Get list of classesDocs
exports.index = function(req, res) {
  var stream = config.upload.path + 'assets/documents/classes.pdf';
  res.sendfile(stream)
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
  var form = new formidable.IncomingForm();
  form.on('file', function(name, file) {
    fs.unlink(config.upload.path + 'assets/documents/classes.pdf', function(err) {
      fs.rename(file.path, config.upload.path + 'assets/documents/classes.pdf', function(err) {
        if(err) { console.log(err); }
      });
    });
  });
  form.keepExtensions = true;
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
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