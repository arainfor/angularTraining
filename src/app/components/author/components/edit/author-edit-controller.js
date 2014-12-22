var AuthorEditController;

AuthorEditController.$inject = ['$stateParams', '$state', 'AuthorService'];


function AuthorEditController($stateParams, $state, AuthorService){
  this.author = AuthorService.authorResource().get({id: $stateParams.id});
  this.$state = $state;
  this.authorService = AuthorService;
}

AuthorEditController.prototype.save = function() {
  var self = this;
  this.authorService.save(this.author).then(function(author) {
    self.$state.go('author.list');
  });
};

angular.module('author')
    .controller('AuthorEditController', AuthorEditController);