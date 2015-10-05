'use strict';

var _ = require('lodash');
var SummaryOfBenefits = require('./summaryOfBenefits.model');

// Get list of summaryOfBenefitss
exports.index = function(req, res) {
  SummaryOfBenefits.find(function (err, summaryOfBenefitss) {
    if(err) { return handleError(res, err); }
    return res.json(200, summaryOfBenefitss);
  });
};

// Get a single summaryOfBenefits
exports.show = function(req, res) {
  SummaryOfBenefits.findById(req.params.id, function (err, summaryOfBenefits) {
    if(err) { return handleError(res, err); }
    if(!summaryOfBenefits) { return res.send(404); }
    return res.json(summaryOfBenefits);
  });
};

// Creates a new summaryOfBenefits in the DB.
exports.create = function(req, res) {
  SummaryOfBenefits.create(req.body, function(err, summaryOfBenefits) {
    if(err) { return handleError(res, err); }
    return res.json(201, summaryOfBenefits);
  });
};

// Updates an existing summaryOfBenefits in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SummaryOfBenefits.findById(req.params.id, function (err, summaryOfBenefits) {
    if (err) { return handleError(res, err); }
    if(!summaryOfBenefits) { return res.send(404); }
    var updated = _.merge(summaryOfBenefits, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, summaryOfBenefits);
    });
  });
};

// Deletes a summaryOfBenefits from the DB.
exports.destroy = function(req, res) {
  SummaryOfBenefits.findById(req.params.id, function (err, summaryOfBenefits) {
    if(err) { return handleError(res, err); }
    if(!summaryOfBenefits) { return res.send(404); }
    summaryOfBenefits.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}