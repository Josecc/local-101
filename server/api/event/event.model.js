'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {type: String, required: true},
  date: { type: Date, default: Date.now },
  time: String,
  location: String
});

module.exports = mongoose.model('Event', EventSchema);