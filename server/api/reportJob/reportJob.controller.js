'use strict';

var _ = require('lodash');
var ReportJob = require('./reportJob.model');

// Get list of reportJobs
exports.index = function(req, res) {
  ReportJob.find(function (err, reportJobs) {
    if(err) { return handleError(res, err); }
    return res.json(200, reportJobs);
  });
};

// Get a single reportJob
exports.show = function(req, res) {
  ReportJob.findById(req.params.id, function (err, reportJob) {
    if(err) { return handleError(res, err); }
    if(!reportJob) { return res.send(404); }
    return res.json(reportJob);
  });
};

// Creates a new reportJob in the DB.
exports.create = function(req, res) {
  ReportJob.create(req.body, function(err, reportJob) {
    if(err) { return handleError(res, err); }
    return res.json(201, reportJob);
  });
};

// Updates an existing reportJob in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ReportJob.findById(req.params.id, function (err, reportJob) {
    if (err) { return handleError(res, err); }
    if(!reportJob) { return res.send(404); }
    var updated = _.merge(reportJob, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, reportJob);
    });
  });
};

// Deletes a reportJob from the DB.
exports.destroy = function(req, res) {
  ReportJob.findById(req.params.id, function (err, reportJob) {
    if(err) { return handleError(res, err); }
    if(!reportJob) { return res.send(404); }
    reportJob.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}