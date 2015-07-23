'use strict';

angular.module('local101App')
  .controller('FooterCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'home',
      'link': '/'
    },
    {
      'title': 'about us',
      'link': '/about-us'
    },
    {
      'title':'members',
      'link': '/members'
    },
    {
      'title':'contractors',
      'link': '/contractors'
    },
    {
      'title':'area standards',
      'link': '/area-standards'
    },
    {
      'title':'training',
      'link': '/training'
    },
    {
      'title':'politics',
      'link': '/politics'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });