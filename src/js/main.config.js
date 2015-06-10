;(function(){
  'use strict';

  angular.module('toDoApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html'
      })
      .otherwise({redirectTo: '/'});
    })
}());
