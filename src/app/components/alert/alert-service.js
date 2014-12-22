var AlertService;

AlertService.$inject = [];

function AlertService() {
  this.alert = { message: '', type: ''};
}

AlertService.prototype.setError = function(message) {
  this.alert.message = message;
  this.alert.type = 'danger';
};

AlertService.prototype.setSuccess = function(message) {
  this.alert.message = message;
  this.alert.type = 'success';
};

angular.module('alert')
    .service('AlertService', AlertService);
