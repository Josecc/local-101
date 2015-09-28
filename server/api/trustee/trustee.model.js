'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TrusteeSchema = new Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model('Trustee', TrusteeSchema);