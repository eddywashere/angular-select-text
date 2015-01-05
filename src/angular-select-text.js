'use strict';
/**
 * angular-select-text directive
 */
angular.module('angular-select-text', []).
  directive('selectText', ['$window', function ($window) {
    var selectElement;

    if ($window.document.selection) {
      selectElement = function(element) {
        var range = $window.document.body.createTextRange();
        range.moveToElementText(element[0]);
        range.select();
      };
    } else if ($window.getSelection) {
      selectElement = function(element) {
        var range = $window.document.createRange();
        range.selectNode(element[0]);
        $window.getSelection().addRange(range);
      };
    }

    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        element.bind('click', function(){
          selectElement(element);
        });
      }
    };
  }]);
