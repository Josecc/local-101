'use strict';

var express = require('express');
var controller = require('./summaryOfBenefits.controller');
var fs = require('fs');

var router = express.Router();

router.get('/', function(request, response){
  var tempFile="client/assets/documents/clfasses.pdf";
  // fs.readFile(tempFile, function (err,data){
  //    response.contentType("application/pdf");
  //    response.send(data);
  // });
	response.download(tempFile);
});
module.exports = router;