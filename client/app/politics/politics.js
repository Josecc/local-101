'use strict';

angular.module('local101App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('politics', {
        url: '/politics',
        templateUrl: 'app/politics/politics.html',
        controller: 'PoliticsCtrl'
      });
  });