;(function(){
  'use strict';

  angular.module('todoApp')
  .config(function($routeProvider){
    $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      controllerAs: 'login',
      resolve: {
        data: function(authFactory){
          authFactory.disallowLogin();
        }
      }
    })
    .when('/logout', {
      template: '',
      controller: 'LogoutController'
    })
    .when('/changepassword', {
      templateUrl: 'views/changepassword.html',
      controller: 'ChangePasswordController',
      controllerAs: 'changepw',
      private: true
    })
  })
  .run(function($routeScope, authFactory){
    $rootScope.$on('$rootChangeStart', function(event, nextRoute, priorRoute){
      if (nextRoute.$$route && nextRoute.$$route.private) {
        authFactory.requireLogin();
      }
    })
  })
})();
