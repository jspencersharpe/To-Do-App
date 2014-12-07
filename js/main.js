;(function(){
  "use strict";

  angular.module('toDoApp', [])
    .controller('ToDoController', function($http){
      var vm = this;

      //http get request and .sucess
      $http.get('https://jsstodoapp.firebaseio.com/list.json')
        .success(function(data){
          vm.tasks = data;
        })
        .error(function(err){
          console.log(err);
        })
    
    vm.addNewTask = function(){
     $http.post('https://jsstodoapp.firebaseio.com/list.json', vm.newTask)
        .success(function(data){
          vm.tasks[data.name] = vm.newTask;
          vm.newTask = _freshTask();
        })
        .error(function(err){
          console.log(err);
        });
    };

    vm.removeToDo = function(todoId){
      var url = 'https://jsstodoapp.firebaseio.com/list/' + todoId + '.json';
      $http.delete(url)
        .success(function(){
          delete vm.tasks[todoId];
        })
        .error(function(err){
          console.log(err);
        });
     };

    vm.newTask = _freshTask();

    vm.priorityOptions = {
      high: 'High',
      medium: 'Medium',
      low: 'Low'
    };

     function _freshTask(){
      return {
        priority: 'low'
      }
     } 
  });

}());


