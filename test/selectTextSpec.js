describe('angular-select-text', function() {
  var elm, scope, getSelection;

  // load the angular-select-text code
  beforeEach(module('angular-select-text'));

  beforeEach(inject(function($rootScope, $compile, $window) {
    // we might move this tpl into an html file as well...
    elm = angular.element(
      '<div id="selection" select-text>' +
        'hello world' +
      '</div>');

    elmWithTarget = angular.element(
      '<div id="selection2" select-text>' +
        'hello ' +
        '<span select-text-target>world</span>' +
      '</div>');

    getSelection = function() {
      var text = "";
      if ($window.getSelection) {
        text = $window.getSelection().toString();
      } else if ($window.document.selection &&
                 $window.document.selection.type != "Control") {
        text = $window.document.selection.createRange().text;
      }
      return text;
    };

    angular.element($window.document.body).append(elm);
    angular.element($window.document.body).append(elmWithTarget);

    scope = $rootScope.$new();
    $compile(elm)(scope);

    scope = $rootScope.$new();
    $compile(elmWithTarget)(scope);

    $rootScope.$digest();
  }));

  it('should select all on click', function() {
    expect(elm.length).toBe(1);
    expect(elm.text()).toBe('hello world');
    elm[0].click();
    expect(getSelection().trim()).toBe('hello world');
  });

  it('should select a descendant on click', function() {
    expect(elmWithTarget.length).toBe(1);
    expect(elmWithTarget.text()).toBe('hello world');
    elmWithTarget[0].click();
    expect(getSelection().trim()).toBe('world');
  });

});
