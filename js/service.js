angular.module('todo').factory('todoStorage', function() {
    var TODO_DATA = 'TODO_DATA';
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
        
        // _ : private: Use From Controller (x) 
        // JSON.stringify(data) 한 값을 localStorage에 저장

        _saveToLocalStorage: function (data) {
            localStorage.setItem(TODO_DATA, JSON.stringify(data))
        },

        // String 값을 JSON으로 변경하여 LocalStorage에서 데이터를 가져옴

        _getFromLocalStorage: function () {
            return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
        },

        get: function() {
            angular.copy(storage._getFromLocalStorage(), storage.todos)
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
            storage._saveToLocalStorage(storage.todos)
        },

        update: function() {
            storage._saveToLocalStorage(storage.todos)
        }
    }
    return storage;
});