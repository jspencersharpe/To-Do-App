;(function(){
  'use strict';

  angular.module('toDoApp')
    .config(function($routeProvider){
      $routeProvider
      .when('/todos', {
        templateUrl: 'views/table.html',
        controller: 'TodoController',
        controllerAs: 'todo',
        private: true
      })
      .when('/todos/new', {
        templateUrl: 'views/table.html',
        controller: 'TodoController',
        controllerAs: 'todo',
        private: true
      })
      .when('/todos/:id', {
        templateUrl: 'views/show.html',
        controller: 'ShowController',
        controllerAs: 'show',
        private: true
      })
      .when('/todos/:id/edit', {
        templateUrl: 'views/table.html',
        controller: 'EditController',
        controllerAs: 'edit',
        private: true
      })
    })
})();
