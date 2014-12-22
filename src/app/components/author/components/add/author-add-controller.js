var AuthorAddController;

AuthorAddController.$inject = ['$state', '$rootScope', 'AuthorService', 'AlertService'];

function AuthorAddController($state, $rootScope, AuthorService, AlertService){
  this.$state = $state;
  this.$rootScope = $rootScope;
  this.authorService = AuthorService;

  this.author;
  this.alertService = AlertService;
}

AuthorAddController.prototype.create = function() {
  this.authors.push(this.authorService.authorResource().save(this.author));
  //this.alertService.setSuccess("Author saved");
  this.$rootScope.$broadcast("authorSuccessfullyAdded");
  this.$state.go('author.list');
};

angular.module('author')
    .controller('AuthorAddController', AuthorAddController);
