'use strict';

var _ = require('lodash');
var AvailableJob = require('./availableJob.model');

// Get list of availableJobs
exports.index = function(req, res) {
  AvailableJob.find(function (err, availableJobs) {
    if(err) { return handleError(res, err); }
    return res.json(200, availableJobs);
  });
};

// Get a single availableJob
exports.show = function(req, res) {
  AvailableJob.findById(req.params.id, function (err, availableJob) {
    if(err) { return handleError(res, err); }
    if(!availableJob) { return res.send(404); }
    return res.json(availableJob);
  });
};

// Creates a new availableJob in the DB.
exports.create = function(req, res) {
  AvailableJob.create(req.body, function(err, availableJob) {
    if(err) { return handleError(res, err); }
    return res.json(201, availableJob);
  });
};

// Updates an existing availableJob in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  AvailableJob.findById(req.params.id, function (err, availableJob) {
    if (err) { return handleError(res, err); }
    if(!availableJob) { return res.send(404); }
    var updated = _.merge(availableJob, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, availableJob);
    });
  });
};

// Deletes a availableJob from the DB.
exports.destroy = function(req, res) {
  AvailableJob.findById(req.params.id, function (err, availableJob) {
    if(err) { return handleError(res, err); }
    if(!availableJob) { return res.send(404); }
    availableJob.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}