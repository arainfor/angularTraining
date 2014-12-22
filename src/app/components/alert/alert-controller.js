var AlertController;

AlertController.$inject = ['$state', '$scope', 'AlertService'];

function AlertController($state, $scope, AlertService) {
  this.$state = $state;
  this.alertBinding = {}; //AlertService.alert;
  var self = this;

  $scope.$on('authorSuccessfullyAdded', function() {
    self.alertBinding.message = "Done!";
    self.alertBinding.type = "success";
  });

  $scope.$on('authorSuccessfullyDeleted', function() {
    self.alertBinding.message = "Done!";
    self.alertBinding.type = "danger";
  });
}

AlertController.prototype.close = function() {
 this.alertBinding.message = null;
};

angular.module('alert')
    .controller('AlertController', AlertController);
