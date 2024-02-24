var app = angular.module('todo', []);

app.controller('TodoCtrl', function ($scope) {
    $scope.todo = {
        title: '요가수련',
        completed: false,
        createdAt: Date.now()
    };
});