'use strict';

describe('Controller: PoliticsCtrl', function () {

  // load the controller's module
  beforeEach(module('local101App'));

  var PoliticsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PoliticsCtrl = $controller('PoliticsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
