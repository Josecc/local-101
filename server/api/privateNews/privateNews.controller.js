'use strict';

var _ = require('lodash');
var PrivateNews = require('./privateNews.model');
// Get list of privateNewss
exports.index = function(req, res) {
  PrivateNews.find().sort({'date': -1}).limit(4).exec(function (err, privateNewss) {
    if(err) { return handleError(res, err); }
    return res.json(200, privateNewss);
  });
};

// Get a single privateNews
exports.show = function(req, res) {
  PrivateNews.findById(req.params.id, function (err, privateNews) {
    if(err) { return handleError(res, err); }
    if(!privateNews) { return res.send(404); }
    return res.json(privateNews);
  });
};

// Creates a new privateNews in the DB.
exports.create = function(req, res) {
  PrivateNews.create(req.body, function(err, privateNews) {
    if(err) { return handleError(res, err); }
    return res.json(201, privateNews);
  });
};

// Updates an existing privateNews in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PrivateNews.findById(req.params.id, function (err, privateNews) {
    if (err) { return handleError(res, err); }
    if(!privateNews) { return res.send(404); }
    var updated = _.merge(privateNews, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, privateNews);
    });
  });
};

// Deletes a privateNews from the DB.
exports.destroy = function(req, res) {
  PrivateNews.findById(req.params.id, function (err, privateNews) {
    if(err) { return handleError(res, err); }
    if(!privateNews) { return res.send(404); }
    privateNews.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}