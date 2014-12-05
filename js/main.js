;(function(){
  "use strict";

  angular.module('toDoApp', [])
    .controller('ToDoController', function(){
      var vm = this;
      vm.tasks = [
      {
        name: 'Make this app',
        desc: 'Make toDo app in Angular',
        due: 'December 5th, 2014'
      },
      {
        name: 'Read about JS',
        desc: 'read books and blogs',
        due: 'December 25th, 2014'
      },
      {
        name: 'Get a good Job',
        desc: 'JS or .net would be great',
        due: 'March 27th, 2015'
      }
      ];

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


