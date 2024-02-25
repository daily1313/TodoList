angular.module('todo').factory('todoStorage', function() {
    var storage = {
        todos: [
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
        ],

        get: function() {
            return storage.todos;
        },

        remove: function(todo) {
            // find todo index in todos
            var idx = storage.todos.findIndex(function (item) {
                return item.title === todo.title;
            })

            // remove from todos
            if(idx > -1) {
                storage.todos.splice(idx, 1);
            }
        },

        add: function(newTodoTitle) {
            var newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            };
    
            storage.todos.push(newTodo);
        }
    }
    return storage;
});