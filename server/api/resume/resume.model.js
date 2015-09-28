'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResumeSchema = new Schema({
  email: String, 
  name: {type: String, required: true},
  objective: {type: String, required: true},
  certifications: String,
  address: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  phone: {type: String, required: true},
  workExperience: String, 
  references: String
});

module.exports = mongoose.model('Resume', ResumeSchema);