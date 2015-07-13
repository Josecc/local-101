'use strict';

angular.module('local101App')
  .controller('AboutUsCtrl', function ($scope) {
    $scope.officers = [{
    	'name': 'John Bobby',
    	'position': 'president',
    	'bio': 'president-bio',
    	'image': 'http://www.cosmeticsdesign-europe.com/var/plain_site/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/regulation-safety/expert-offers-clarity-on-responsible-person-requirement/8610667-1-eng-GB/Expert-offers-clarity-on-Responsible-Person-requirement_strict_xxl.jpg'
    },
    {
    	'name': 'Sam Bobby',
    	'position': 'vice-president',
    	'bio': 'vice-president-bio',
    	'image': 'http://www.cosmeticsdesign-europe.com/var/plain_site/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/regulation-safety/expert-offers-clarity-on-responsible-person-requirement/8610667-1-eng-GB/Expert-offers-clarity-on-Responsible-Person-requirement_strict_xxl.jpg'
    },
    {
    	'name': 'Tim Bobby',
    	'position': 'treasurer',
    	'bio': 'treasurer-bio',
    	'image': 'http://www.cosmeticsdesign-europe.com/var/plain_site/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/regulation-safety/expert-offers-clarity-on-responsible-person-requirement/8610667-1-eng-GB/Expert-offers-clarity-on-Responsible-Person-requirement_strict_xxl.jpg'
    },
    {
    	'name': 'Rob Bobby',
    	'position': 'secretary',
    	'bio': 'secretary-bio',
    	'image': 'http://www.cosmeticsdesign-europe.com/var/plain_site/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/regulation-safety/expert-offers-clarity-on-responsible-person-requirement/8610667-1-eng-GB/Expert-offers-clarity-on-Responsible-Person-requirement_strict_xxl.jpg'
    },
    {
    	'name': 'Ran Bobby',
    	'position': 'warden',
    	'bio': 'warden-bio',
    	'image': 'http://www.cosmeticsdesign-europe.com/var/plain_site/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/regulation-safety/expert-offers-clarity-on-responsible-person-requirement/8610667-1-eng-GB/Expert-offers-clarity-on-Responsible-Person-requirement_strict_xxl.jpg'
    },
    {
    	'name': 'Jeff Bobby',
    	'position': 'conductor',
    	'bio': 'conductor-bio',
    	'image': 'http://www.cosmeticsdesign-europe.com/var/plain_site/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/regulation-safety/expert-offers-clarity-on-responsible-person-requirement/8610667-1-eng-GB/Expert-offers-clarity-on-Responsible-Person-requirement_strict_xxl.jpg'
    }];

    $scope.trustees = [{
    	'name': "Tom Meyer"
    },
    {
    	'name': "Tom Meyer"
    },
    {
    	'name': "Timmy Moyer"
    }];

    $scope.delegates = [{
    	'name': "Jany Doe"
    },
    {
    	'name': "John Doe"
    },
    {
    	'name': "Billy Bob"
    }];

  });
