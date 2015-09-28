'use strict';

angular.module('local101App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('members', {
        url: '/members',
        templateUrl: 'app/members/members.html',
        controller: 'MembersCtrl',
        authenticate: true
      });
  });