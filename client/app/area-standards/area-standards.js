'use strict';

angular.module('local101App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('area-standards', {
        url: '/area-standards',
        templateUrl: 'app/area-standards/area-standards.html',
        controller: 'AreaStandardsCtrl'
      });
  });