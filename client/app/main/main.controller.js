'use strict';

angular.module('local101App')
  .controller('MainCtrl', function ($scope, locale, $http, localeEvents, $sce) {

    var updateLang = function(language, text) {
      if (language === "en-US") {
        $scope.english = true;

      }
      else {
        $scope.english = false;
      }
    }

    //Initial update
    updateLang(locale.getLocale());

    //Button change update
    $scope.$on(localeEvents.localeChanges, function (event, data) {
       updateLang(data);
    });

    var slides = $scope.slides = [];
    $scope.join = {};

    $scope.addSlide = function(index) {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: '/assets/images/header-' + index + '.jpg'
      });
    };

    $http.get('/api/headerCaptions').then(function(res) {
      $scope.captions = res.data;
    }, function(err) {
      console.log(err);
    });

    $http.get('/api/publicNews').then(function(res) {
      $scope.news = res.data;
    }, function(err) {
      console.log(err);
    });

    $scope.join.submit = function() {
      console.log($scope.join.pay);
      console.log("hello");
    }

    for (var i=0; i<10; i++) {
      $scope.addSlide(i);
    }

    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
  });
