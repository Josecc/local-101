/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var express = require('express');

module.exports = function(app) {

  // Insert routes below
  app.use('/send-mail', require('./api/send-mail'));
  app.use('/documents/jobs', require('./api/jobsDoc'));
  app.use('/documents/classes', require('./api/classesDoc'));
  app.use('/summaryOfBenefits', require('./api/summaryOfBenefits'));
  app.use('/api/headerCaptions', require('./api/headerCaption'));
  app.use('/api/headerPicture', require('./api/headerPicture'));
  app.use('/api/contractors', require('./api/contractors'));
  app.use('/api/delegates', require('./api/delegate'));
  app.use('/api/trustees', require('./api/trustee'));
  app.use('/api/officers', require('./api/officer'));
  app.use('/api/interested', require('./api/interest'));
  app.use('/api/publicNews', require('./api/publicNews'));
  app.use('/api/resumes', require('./api/resume'));
  app.use('/api/boycotts', require('./api/boycott'));
  app.use('/api/reportJobs', require('./api/reportJob'));
  app.use('/api/availableJobs', require('./api/availableJob'));
  app.use('/api/events', require('./api/event'));
  app.use('/api/privateNews', require('./api/privateNews'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
