'use strict';

angular.module('local101App')
  .controller('NavbarCtrl', function ($scope, $location, Auth, locale, localeEvents) {
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

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.slider').slider({full_width: true});
    $('.scrollspy').scrollSpy();
    if ($('.table-of-contents').length)
      $('.table-of-contents').pushpin({ top: $('.row').offset().top });
    $('.modal-trigger').leanModal({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    //Language button setting & updating

    $scope.setLocale = locale.setLocale;

    var updateLang = function(language, text) {
      if (language === "en-US") {
        $scope.inactiveLang = "Español";
        $scope.setLang = "es-ES";
        $scope.inactiveLangTooltip = "Ver en Español";
        $('input#lang').prop("checked", false);

      }
      else {
        $scope.inactiveLang = "English";
        $scope.setLang = "en-US";
        $scope.inactiveLangTooltip = "View in English";
        $('input#lang').prop("checked", true);
      }
    }

    //Initial update
    updateLang(locale.getLocale());

    //Button change update
    $scope.$on(localeEvents.localeChanges, function (event, data) {
       updateLang(data);
    });

    //END: Language button setting & updating

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };


  });