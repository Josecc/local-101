'use strict';

var _ = require('lodash');
var PublicNews = require('./publicNews.model');

// Get list of publicNewss
exports.index = function(req, res) {
  PublicNews.find().sort({'date': -1}).limit(4).exec(function (err, publicNewss) {
    if(err) { return handleError(res, err); }
    return res.json(200, publicNewss);
  });
};

// Get a single publicNews
exports.show = function(req, res) {
  PublicNews.findById(req.params.id, function (err, publicNews) {
    if(err) { return handleError(res, err); }
    if(!publicNews) { return res.send(404); }
    return res.json(publicNews);
  });
};

// Creates a new publicNews in the DB.
exports.create = function(req, res) {
  PublicNews.create(req.body, function(err, publicNews) {
    if(err) { return handleError(res, err); }
    return res.json(201, publicNews);
  });
};

// Updates an existing publicNews in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PublicNews.findById(req.params.id, function (err, publicNews) {
    if (err) { return handleError(res, err); }
    if(!publicNews) { return res.send(404); }
    var updated = _.merge(publicNews, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, publicNews);
    });
  });
};

// Deletes a publicNews from the DB.
exports.destroy = function(req, res) {
  PublicNews.findById(req.params.id, function (err, publicNews) {
    if(err) { return handleError(res, err); }
    if(!publicNews) { return res.send(404); }
    publicNews.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}