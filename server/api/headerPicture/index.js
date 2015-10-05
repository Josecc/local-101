'use strict';

var express = require('express');
var formidable = require('formidable');
var http = require('http');
var util = require('util');
var fs = require('fs');
var controller = require('./headerPicture.controller');
var config = require('../../config/environment');

var router = express.Router();

//This looks like carp. like really. Horrible. but it works... so I mean whatever, but EW.
router.post('/', function (req, res) {
	var form = new formidable.IncomingForm();
	form.on('file', function(name, file) {
		fs.unlink(config.upload.path + 'assets/images/header-9.jpg', function(err) {
			if(err) { console.log(err); }
      		fs.rename(config.upload.path + 'assets/images/header-8.jpg', config.upload.path + 'assets/images/header-9.jpg', function(err) {
		     	if(err) { console.log(err); }
		     	fs.rename(config.upload.path + 'assets/images/header-7.jpg', config.upload.path + 'assets/images/header-8.jpg', function(err) {
			     	if(err) { console.log(err); }
			     	fs.rename(config.upload.path + 'assets/images/header-6.jpg', config.upload.path + 'assets/images/header-7.jpg', function(err) {
				     	if(err) { console.log(err); }
				     	fs.rename(config.upload.path + 'assets/images/header-5.jpg', config.upload.path + 'assets/images/header-6.jpg', function(err) {
					     	if(err) { console.log(err); }
					     	fs.rename(config.upload.path + 'assets/images/header-4.jpg', config.upload.path + 'assets/images/header-5.jpg', function(err) {
						     	if(err) { console.log(err); }
						     	fs.rename(config.upload.path + 'assets/images/header-3.jpg', config.upload.path + 'assets/images/header-4.jpg', function(err) {
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