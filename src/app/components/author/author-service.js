var AuthorService;

AuthorService.$inject = ['$resource', '$http'];

function AuthorService($resource, $http){
   this.$resource = $resource;
   this.$http = $http;
}

AuthorService.prototype.authorResource = function() {
  return this.$resource('/api/authors/:id', {}, {
    'update': {method: 'PUT'},
    'remove': {method: 'DELETE', isArray: true}
  });
};

AuthorService.prototype.list = function() {
  return this.$http.get('/api/authors').then(function(response) {
    return response.data;
  });

//  return this.$http.get('/api/authors').success(function(response) {
//    return response;
//  });

};

AuthorService.prototype.delete = function(id) {
  return this.$http.delete('/api/authors/' + id).then(function(response) {
    return response.data;
  });
};

AuthorService.prototype.save = function(author) {
  return this.$http.put('/api/authors/' + author.id, author).then(function(response) {
    return response.data;
  });
};

angular.module('author').service('AuthorService', AuthorService);
