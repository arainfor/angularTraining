var AuthInterceptor;

AuthInterceptor.$inject = ['X_TOKEN'];

function AuthInterceptor(X_TOKEN) {
  this.x_token = X_TOKEN;
}

AuthInterceptor.prototype.request = function(config) {
  alert(this.x_token);
  config.headers['x-session-token'] = this.x_token;
  return config;
}


//angular.module('auth').service('authInterceptor', AuthInterceptor);
angular.module('auth').factory('authInterceptor', ['X_TOKEN', function(token) {
  return {
    request: function(config) {
      config.headers['x-session-token'] = token;
      return config;
    }
  }
}]);
