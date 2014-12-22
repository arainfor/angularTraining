var AuthorDetailsController;

AuthorDetailsController.$inject = ['$stateParams', '$state', 'AuthorService', 'author'];

function AuthorDetailsController($stateParams, $state, AuthorService, author){
  this.author = author;
  this.$state = $state;
}

AuthorDetailsController.prototype.back = function() {
    this.$state.go('author.list');
};

angular.module('author')
    .controller('AuthorDetailsController', AuthorDetailsController);