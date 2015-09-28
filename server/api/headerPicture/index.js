'use strict';

var express = require('express');
var formidable = require('formidable');
var http = require('http');
var util = require('util');
var fs = require('fs');
var controller = require('./headerPicture.controller');
var config = require('../../config/environment');

var router = express.Router();

router.post('/', function (req, res) {
	var form = new formidable.IncomingForm();
	form.on('file', function(name, file) {
		fs.unlink(config.upload.path + 'assets/images/header-3.jpg', function(err) {
			if(err) { console.log(err); }
      		fs.rename(config.upload.path + 'assets/images/header-2.jpg', config.upload.path + 'assets/images/header-3.jpg', function(err) {
		     	if(err) { console.log(err); }
		     	fs.rename(config.upload.path + 'assets/images/header-1.jpg', config.upload.path + 'assets/images/header-2.jpg', function(err) {
			     	if(err) { console.log(err); }
			     	fs.rename(config.upload.path + 'assets/images/header-0.jpg', config.upload.path + 'assets/images/header-1.jpg', function(err) {
				     	if(err) { console.log(err); }
				     	fs.rename(file.path, config.upload.path + 'assets/images/header-0.jpg', function(err) {
							if(err) { console.log(err); }
						});
				    });
			    });
		    });
		});
	});
	form.keepExtensions = true;

	form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
});
module.exports = router;