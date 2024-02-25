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
                    '<input type="checkbox" ng-model="todo.completed" ng-click="update()">' +
                '</span>' +
                '<input type="text" class="form-control" ng-model="todo.title">' +
                '<span class="input-group-btn">' +
                    '<button class="btn btn-danger" type="button" ng-click="remove(todo)">삭제</button>' +
                '</span>' +
            '</div>' +
            '<date>{{todo.createdAt | date: "yyyy-MM-dd HH:mm:ss" }}</date>'
    }
})

angular.module('todo').directive('todoFilters', function() {
    return {
        template:
        '<button class="btn btn-primary" ng-click="statusFilter={completed:true}">Completed</button>' +
        '<button class="btn btn-primary" ng-click="statusFilter={completed:false}">Active</button>' +
        '<button class="btn btn-primary" ng-click="statusFilter={}">All</button>'
    }
})

angular.module('todo').directive('todoForm', function() {
    return {
        template:
        '<form name="todoForm" ng-submit="add(newTodoTitle)">' +
            '<div class="input-group">' +
                '<input type="text" class="form-control" ng-model="newTodoTitle" placeholder="input new todo" minlength="3">' +
            '<span class="input-group-btn">' +
                '<button class="btn btn-success" type="submit">추가</button>' +
            '</span>' +
            '</div>' +
            '<div ng-show="todoForm.$dirty && todoForm.$invalid">' +
            '<div class="alert alert-warning role="alert">3글자 이상 입력하세요.</div>' +
            '</div>' +
        '</form>'
    }
})