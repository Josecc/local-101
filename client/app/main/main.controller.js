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
      $http.post('/send-mail/ubclocal101@gmail.com', {
                                                        substitutions: [
                                                                          {key: "-name-", val: $scope.join.name}, 
                                                                          {key: "-email-", val: $scope.join.email},
                                                                          {key: "-phone-", val: $scope.join.phone},
                                                                          {key: "-trade-", val: $scope.join.trade},
                                                                          {key: "-apprenticeship-", val: $scope.join.apprenticeship ? "Apprenticeship" : " "},
                                                                          {key: "-certifications-", val: $scope.join.certifications ? "Certifications" : " "},
                                                                          {key: "-fairWages-", val: $scope.join.wages ? "Fair Wages" : " "},
                                                                          {key: "-overtimePay-", val: $scope.join.pay ? "Overtime Pay" : " "},
                                                                          {key: "-medicalInsurance-", val: $scope.join.medical ? "Medical Insurance" : " "},
                                                                          {key: "-retirement-", val: $scope.join.retirement ? "Retirement" : " "}
                                                                        ],
                                                        subject: "Join Our Movement Submission",
                                                        template: "ce5a2044-ed1f-49dc-b608-bfc27f3c6f27"
                                                      }
      ).success( function(data) {
        Materialize.toast('Thank you ' + $scope.join.name + '. Form submitted!', 4000, 'rounded');
        $scope.join.name = "";
        $scope.join.email = "";
        $scope.join.phone = "";
        $scope.join.trade = "";
        $scope.join.apprenticeship = false;
        $scope.join.certifications = false;
        $scope.join.wages = false;
        $scope.join.pay = false;
        $scope.join.medical = false;
        $scope.join.retirement = false;
      });
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
