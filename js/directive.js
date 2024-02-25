angular.module('todo').directive('todoTitle', function() {
    return {
        template: '<h1>TodoList</h1>'
    }
}) 

angular.module('todo').directive('todoItem', function() {
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