'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PrivateNewsSchema = new Schema({
  heading: {type: String, required: true},
  details: {type: String, required: true},
  date: { type: Date, default: Date.now },
  headingSpanish: String, 
  detailsSpanish: String,
  url: String
});


module.exports = mongoose.model('PrivateNews', PrivateNewsSchema);