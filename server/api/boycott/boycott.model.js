'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BoycottSchema = new Schema({
  name: {type: String, required: true},
  //If boycott is false, it will appear in the "shop here" list.
  boycott: {type: Boolean, required: true}
});

module.exports = mongoose.model('Boycott', BoycottSchema);