'use strict';

describe('Service: fileUpload', function () {

  // load the service's module
  beforeEach(module('local101App'));

  // instantiate service
  var fileUpload;
  beforeEach(inject(function (_fileUpload_) {
    fileUpload = _fileUpload_;
  }));

  it('should do something', function () {
    expect(!!fileUpload).toBe(true);
  });

});
