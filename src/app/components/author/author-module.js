angular.module('author', ['ui.router','ngResource'])
    .config(['$stateProvider',function($stateProvider){
      $stateProvider
        .state('author',{
          url : '/author',
          abstract : true,
          template: '<ui-view/>'
        })
        .state('author.list',{
          url : '/list',
          controller : 'AuthorController',
          controllerAs :'authorCtrl',
          templateUrl : '/app/components/author/components/author_list.html',
          resolve : {
            authors : function(AuthorService) {
              return AuthorService.list().then(function(response) { return response});
            }
          }
        })
        .state('author.details',{
          url : '/details/:id',
          controller : 'AuthorDetailsController',
          controllerAs :'authorCtrl',
          templateUrl : '/app/components/author/components/details/author_details.html',
          resolve : {
            authors : function(AuthorService, $stateParams) {
              return AuthorService.authorResource().get({id: $stateParams.id});
            }
          }

        })
        .state('author.edit',{
          url : '/edit/:id',
          controller : 'AuthorEditController',
          controllerAs :'authorCtrl',
          templateUrl : '/app/components/author/components/edit/author_edit.html'
        })
        .state('author.create',{
          url : '/create',
          controller : 'AuthorAddController',
          controllerAs :'authorCtrl',
          templateUrl : '/app/components/author/components/add/author_add.html'
        });
    }]);
