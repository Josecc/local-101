'use strict';

angular.module('local101App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('training', {
        url: '/training',
        templateUrl: 'app/training/training.html',
        controller: 'TrainingCtrl'
      });
  });