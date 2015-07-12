'use strict';

describe('Controller: ContractorsCtrl', function () {

  // load the controller's module
  beforeEach(module('local101App'));

  var ContractorsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContractorsCtrl = $controller('ContractorsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
