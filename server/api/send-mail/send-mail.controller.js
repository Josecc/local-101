'use strict';

var _ = require('lodash');
var SendMail = require('./send-mail.model');

// Creates a new send-mail in the DB.
exports.send = function(req, res) {
  var toAddress = req.params.toAddress;
  var substitutions = req.body.substitutions;
  var subject = req.body.subject || "UBC Local 101";
  var tempId = req.body.template;

  var sendgrid = require("sendgrid")("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");
  var email = new sendgrid.Email();

  email.addTo(toAddress);
  email.setFrom("ubclocal101@gmail.com");
  email.setSubject(subject);
  email.setHtml(" ");

  for (var sub in substitutions){
    email.addSubstitution(substitutions[sub].key, substitutions[sub].val);
  }

  email.addFilter('templates', 'enable', 1);
  email.addFilter('templates', 'template_id', tempId);

  sendgrid.send(email, function(err, json) {
    if (err) { 

        console.error(err);
        res.json({sent: 0}); //If error, user saved, email didn't send.
        return next(err);

    } else {
      
        console.log(json);
        res.json({sent: 1}); //If no error, 'sent!'

    }
  });
};


function handleError(res, err) {
  return res.send(500, err);
}