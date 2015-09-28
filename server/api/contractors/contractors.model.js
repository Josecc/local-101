'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContractorsSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  title: {type: String, required: true},
  company: {type: String, required: true},
  phone: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  interests: [String]
});

module.exports = mongoose.model('Contractors', ContractorsSchema);