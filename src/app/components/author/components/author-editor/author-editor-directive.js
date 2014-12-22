var AuthorEditorDirective;

angular.module('author').directive('authorEditor', function() {
  return {
    restrict : 'E',
    scope : {author : "=", buttonCallback : "&",  buttonLabel : '@'},
    templateUrl : 'app/components/author/components/author-editor/author-editor.html',
    link : function(scope, element, attr) {
      //console.log(attr);
      scope.readOnly = attr.readOnly == "true";
    }
//    controller : function($scope, $element, $attrs, $transclude) {},
//    compile: function compile(tElement, tAttrs, transclude) {
//      return {
//        pre: function preLink(scope, iElement, iAttrs) {},
//        post: function preLink(scope, iElement, iAttrs) {},
//      }
//    }
  };

});