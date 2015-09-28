'use strict';

angular.module('local101App')
  .controller('AboutUsCtrl', function ($scope, $http) {
    $http.get('/api/officers').then(function(res){
        $scope.officers = res.data;
    }, function(err) {
        console.log(err);
    });

    $http.get('/api/trustees').then(function(res){
        $scope.trustees = res.data;
    }, function(err) {
        console.log(err);
    });

    $http.get('/api/delegates').then(function(res){
        $scope.delegates = res.data;
    }, function(err) {
        console.log(err);
    });

  });
