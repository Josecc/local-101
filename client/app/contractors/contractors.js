'use strict';

angular.module('local101App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contractors', {
        url: '/contractors',
        templateUrl: 'app/contractors/contractors.html',
        controller: 'ContractorsCtrl'
      });
  });