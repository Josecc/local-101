'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OfficerSchema = new Schema({
  name: {type: String, required: true},
  position: {type: String, required: true, enum: ["president", "vice-president", "treasurer", "secretary-recording", "secretary-financial", "warden", "conductor"]},
  bio: {type: String, required: true},
  image: String
});

module.exports = mongoose.model('Officer', OfficerSchema);