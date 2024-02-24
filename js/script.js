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
});