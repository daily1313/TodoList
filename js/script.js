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

app.directive('todoItem', function() {
    return {
        template: 
            '<div class="input-group">' +
                '<span class="input-group-addon">' +
                    '<input type="checkbox" ng-model="todo.completed">' +
                '</span>' +
                '<input type="text" class="form-control" ng-model="todo.title">' +
                '<span class="input-group-btn">' +
                    '<button class="btn btn-danger" type="button" ng-click="remove(todo)">삭제</button>' +
                '</span>' +
            '</div>' +
            '<date>{{todo.createdAt | date: "yyyy-MM-dd HH:mm:ss" }}</date>'
    }
})