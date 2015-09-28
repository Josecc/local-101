'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/local101-dev'
  },

  upload: {
  	path: 'client/'
  },

  seedDB: true
};
