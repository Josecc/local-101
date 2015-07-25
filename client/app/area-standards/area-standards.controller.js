'use strict';

angular.module('local101App')
  .controller('AreaStandardsCtrl', function ($scope) {
    
  	$('ul.tabs').tabs();
  	$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

  });
