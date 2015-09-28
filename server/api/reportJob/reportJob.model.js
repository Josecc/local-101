'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReportJobSchema = new Schema({
  contractor: {type: String, required: true},
  typeOfWork: {type: String, required: true},
  nameOfWork: {type: String, required: true},
  streetAddress: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  generalContractor: {type: String, required: true},
  floors: {type: Number, required: true},
  gameBoxFloor: {type: Number, required: true},
  foreman: {type: String, required: true},
  startDate: {type: Date, required: true},
  numOfCarpenters: {type: Number, required: true}
});

module.exports = mongoose.model('ReportJob', ReportJobSchema);