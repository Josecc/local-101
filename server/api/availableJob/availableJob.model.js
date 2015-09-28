'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AvailableJobSchema = new Schema({
  contractor: {type: String, required: true},
  typeOfWork: {type: String, required: true},
  streetAddress: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  floors: {type: Number, required: true},
  gameBoxFloor: {type: Number, required: true},
  foreman: {type: String, required: true},
  cellPhone: String
});

module.exports = mongoose.model('AvailableJob', AvailableJobSchema);