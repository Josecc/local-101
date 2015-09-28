'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InterestSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  trade: {type: String, required: true},
  interests: [String]
});

module.exports = mongoose.model('Interest', InterestSchema);