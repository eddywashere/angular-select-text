describe('angular-select-text', function() {
  var elm, isTextSelected, scope;

  // load the angular-select-text code
  beforeEach(module('angular-select-text'));

  beforeEach(inject(function($rootScope, $compile) {
    // we might move this tpl into an html file as well...
    elm = angular.element(
      '<div id="selection" select-text>' +
        'hello world' +
      '</div>');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));


  it('should be clickable', inject(function($compile, $rootScope, $window) {
    expect(elm.length).toBe(1);
    expect(elm.eq(0).text()).toBe('hello world');
    elm[0].click();
    expect($window.getSelection().toString()).toBe('hello world');
  }));

});