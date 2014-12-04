;(function(){
  "use strict";

  angular.module('toDoApp', [])
    .controller('ToDoController', function(){
      var vm = this;
      vm.tasks = [
      {
        name: 'Make this app',
        desc: 'Make toDo app in Angular',
        due: 'Friday, December 5th'
      },
      {
        name: 'Read about JS',
        desc: 'read books and blogs',
        due: 'Thursday, December 25th'
      },
      {
        name: 'Get a good Job',
        desc: 'JS or .net would be great',
        due: 'Friday, March 27th'
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
