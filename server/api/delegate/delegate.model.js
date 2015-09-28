'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DelegateSchema = new Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model('Delegate', DelegateSchema);