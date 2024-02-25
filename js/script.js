var app = angular.module('todo', []);

app.controller('TodoCtrl', function ($scope) {
    $scope.todos = [
        {
            title: 'C++',
            completed: false,
            createdAt: Date.now()
        },
        {
            title: 'Java',
            completed: false,
            createdAt: Date.now()
        },
        {
            title: 'Selenium',
            completed: false,
            createdAt: Date.now()
        },
        {
            title: 'Spring',
            completed: false,
            createdAt: Date.now()
        },
        {
            title: 'JavaScript',
            completed: false,
            createdAt: Date.now()
        }
    ];

    $scope.remove = function(todo) {
        // find todo index in todos
        var idx = $scope.todos.findIndex(function (item) {
            return item.title === todo.title;
        })

        // remove from todos
        if(idx > -1) {
            $scope.todos.splice(idx, 1);
        }
    }

    $scope.add = function (newTodoTitle) {
        // create new todo 
        var newTodo = {
            title: newTodoTitle,
            completed: false,
            createdAt: Date.now()
        };

        // push into todos
        $scope.todos.push(newTodo);

        // empty form
        $scope.newTodoTitle = "";
    }
});

app.directive('todoTitle', function() {
    return {
        template: '<h1>TodoList</h1>'
    }
}) 