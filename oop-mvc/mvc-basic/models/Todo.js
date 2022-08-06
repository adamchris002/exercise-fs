const fs = require('fs');

class Todo {
    constructor (id, task, status, createdAt, updatedAt) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static getTodos() {
        let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        todos = todos.map(todo => {
            const {id, task, status, createdAt, updatedAt} = todo;
            //untuk mereturn todos menjadi class Todo
            return new Todo(id, task, status, createdAt, updatedAt);
        })
        return todos;
    }

    static add(params) {
        let todos = this.getTodos();
        let lastIndex = todos.length - 1;
        let id = todos[lastIndex].id + 1;
        let task = params [0];
        let status = false;
        let createdAt = new Date();
        let updatedAt = new Date();

        todos.push(new Todo(id, task, status, createdAt, updatedAt));
        this.save(todos);
        return `"${task}" has been added!`;
    }

    static delete(params) {
        let todos = this.getTodos();
        let id = Number(params[0]);

        todos = todos.filter(todo => todo.id !== id);
        this.save(todos);
        return `ID ${id} has been deleted..!`;
    }

    static save(todos) {
        let todosString = JSON.stringify(todos, null, 3);
        fs.writeFileSync('./data.json', todosString);
    }

    static update(params) {
        let todos = this.getTodos();
        let taskId = Number(params[0]);
        let taskName = params[1];

        todos = todos.map(element => {
            if (element.id === taskId) {
                element.task = taskName;
                element.createdAt = new Date();
                element.updatedAt = new Date();
            }
            return element
        })
        this.save(todos);

        return `Id ${taskId} has been updated`;
    }

    static changeStatus(params) {
        let todos = this.getTodos();
        let newStatusIndex = Number(params[0]);

        todos = todos.map(todo => {
            if (todo.id === newStatusIndex) {
                todo.status = !todo.status;
                todo.updatedAt = new Date();
            }
            return todo;
        })

        this.save(todos);

        return `Id ${newStatusIndex} status has been updated`;
    }

    static filter(params) {
        let todos = this.getTodos();
        let status = params[0];

        if (status === "true") {
            status = true;
        }
        else if (status === "false") {
            status = false;
        }
        else {
            return `Your input is wrong`;
        }

        todos = todos.filter(todo => todo.status === status);

        return todos;
    }
}

module.exports = Todo;