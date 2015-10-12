'use strict';

var _ = require('lodash');
var JobsDoc = require('./jobsDoc.model');
var fs = require('fs');
var formidable = require('formidable');
var config = require('../../config/environment');
var util = require('util');

// Get list of jobsDocs
exports.index = function(req, res) {
  var stream = config.upload.path + 'assets/documents/jobs.docx';
  res.sendfile(stream);
};

// Get a single jobsDoc
exports.show = function(req, res) {
  JobsDoc.findById(req.params.id, function (err, jobsDoc) {
    if(err) { return handleError(res, err); }
    if(!jobsDoc) { return res.send(404); }
    return res.json(jobsDoc);
  });
};

// Creates a new jobsDoc in the DB.
exports.create = function(req, res) {
  var form = new formidable.IncomingForm();
  form.on('file', function(name, file) {
    fs.unlink(config.upload.path + 'assets/documents/jobs.docx', function(err) {
      fs.rename(file.path, config.upload.path + 'assets/documents/jobs.docx', function(err) {
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

// Updates an existing jobsDoc in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  JobsDoc.findById(req.params.id, function (err, jobsDoc) {
    if (err) { return handleError(res, err); }
    if(!jobsDoc) { return res.send(404); }
    var updated = _.merge(jobsDoc, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, jobsDoc);
    });
  });
};

// Deletes a jobsDoc from the DB.
exports.destroy = function(req, res) {
  JobsDoc.findById(req.params.id, function (err, jobsDoc) {
    if(err) { return handleError(res, err); }
    if(!jobsDoc) { return res.send(404); }
    jobsDoc.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}