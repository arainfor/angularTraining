angular.module("validation").directive('myColorfulValidation', function() {
  return {
    restrict : 'A',
    require : 'ngModel',
    link : function(scope, element, attr, ngModelCtrl) {
      scope.$watch(function() {
        return ngModelCtrl.$viewValue
      }, function (newValue, oldValue) {
        console.log(newValue);
        element.removeClass('alert-danger alert-warning alert-success')
        if (!newValue || newValue.length < 3) {
          ngModelCtrl.$setValidity('colorValidation', false);
          element.addClass('alert-danger');
        } else if (newValue.length < 10) {
          ngModelCtrl.$setValidity('colorValidation', true);
          element.addClass('alert-warning');
        } else {
          ngModelCtrl.$setValidity('colorValidation', true);
          element.addClass('alert-success');
        }
      });
    }
  }
});
