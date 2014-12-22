angular.module('auth',[]).config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
}]);
angular.module('auth').constant('X_TOKEN', 'topSecret');
