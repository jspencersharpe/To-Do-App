;(function(){
  "use strict";

  angular.module('toDoApp', [])
    .controller('ToDoController', function($http){
      var vm = this;
      vm.tasks = 

  vm.addNewTask = function(){
     vm.tasks.push(vm.newTask);
     vm.newTask = null;
  };

  vm.removeToDo = function(todo){
    var index = vm.tasks.indexOf(todo);
    vm.tasks.splice(index, 1);
  };

  });

}());


