'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HeaderCaptionSchema = new Schema({
  caption: {type: String,
  			default: " "},
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HeaderCaption', HeaderCaptionSchema);