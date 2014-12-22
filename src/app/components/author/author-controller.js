var AuthorController;

AuthorController.$inject = ['$state', '$rootScope', 'AuthorService', 'AlertService', 'authors'];

function AuthorController($state, $rootScope, AuthorService, AlertService, authors){
  this.$state = $state;
  this.$rootScope = $rootScope;
  this.authorService = AuthorService;
  //this.authors = AuthorService.authorResource().query();
  this.authors = authors;
  var self = this;
//  AuthorService.list().then(function(authors) {
//    self.authors = authors;
//  });

  this.author;
  this.alertService = AlertService;
}

AuthorController.prototype.create = function() {
  this.authors.push(this.authorService.authorResource().save(this.author));
  //this.alertService.setSuccess("Author saved");
  this.$rootScope.$broadcast("authorSuccessfullyAdded");
  this.$state.go('author.list');
};

AuthorController.prototype.details = function(author) {
 this.$state.go('author.details', {id:author.id});
};

AuthorController.prototype.remove = function(author) {
  var self = this;
  this.authorService.delete(author.id).then(function (authors) {
    self.authors = authors;
    self.$rootScope.$broadcast("authorSuccessfullyDeleted");
  });
};

AuthorController.prototype.edit = function(author) {
  this.$state.go('author.edit', {id:author.id});
};

angular.module('author')
    .controller('AuthorController', AuthorController);
