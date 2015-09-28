'use strict';

angular.module('local101App')
  .controller('MembersCtrl', function ($scope, Auth, $location, $http) {
    $scope.user = {};
    $scope.errors = {};
    $scope.isAdmin = Auth.isAdmin;

    $( function() {
      $('.dropdown-button').dropdown({
  			inDuration: 300,
  			outDuration: 225,
  			constrain_width: false, // Does not change width of dropdown to that of the activator
  			hover: true, // Activate on hover
  			gutter: 0, // Spacing from edge
  			belowOrigin: false // Displays dropdown below the button
  	    }
      );
    });
    $http.get('/api/privateNews').then(function(res) {
      $scope.news = res.data;
    }, function(err) {
      console.log(err);
    });

    $http.get('/api/events').then(function(res) {
      $scope.events = res.data;
    }, function(err) {
      console.log(err);
    });

    $http.get('/api/boycotts').then(function(res) {
      $scope.boycotts = res.data;
    }, function(err) {
      console.log(err);
    });

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

  });
