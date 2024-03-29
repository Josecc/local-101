'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JobsDocSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('JobsDoc', JobsDocSchema);