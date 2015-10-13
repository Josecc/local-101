'use strict';

var express = require('express');
var controller = require('./send-mail.controller');

var router = express.Router();

router.post('/:toAddress', controller.send);

module.exports = router;