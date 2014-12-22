'use strict';

/**
 * @ngdoc overview
 * @name trainingApp
 * @description
 * # trainingApp
 *
 * Main module of the application.
 */
angular
  .module('trainingApp', [
    'gettext',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'validation',
    'alert',
    'author',
    'auth'])
  .config(['$urlRouterProvider','$stateProvider',function ($urlRouterProvider,$stateProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('home',{
        url : '/',
        templateUrl : 'app/components/main/main.html'
      })
    }])
  .run(['gettextCatalog', function(gettextCatalog) {
    gettextCatalog.setCurrentLanguage('en_US');
  }]);
