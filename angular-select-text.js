'use strict';
/**
 * angular-select-text directive
 */
angular.module('angular-select-text', []).
  directive('selectText', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        element.bind('click', function(e){
          var range;
          if (document.selection) {
            range = document.body.createTextRange();
            range.moveToElementText(element[0]);
            range.select();
          } else if (window.getSelection) {
            range = document.createRange();
            range.selectNode(element[0]);
            window.getSelection().addRange(range);
          }
        });
      }
    };
  });