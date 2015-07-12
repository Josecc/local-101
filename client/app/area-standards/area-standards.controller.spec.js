'use strict';

describe('Controller: AreaStandardsCtrl', function () {

  // load the controller's module
  beforeEach(module('local101App'));

  var AreaStandardsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AreaStandardsCtrl = $controller('AreaStandardsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
