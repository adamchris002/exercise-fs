const Todo = require('../models/Todo')
const View = require('../views/View')

// titik dua .. untuk mundur sekali dan kemudian bisa masuk ke dalam folder lain


class TodoController {
    //static agar kita tidak perlu lagi instansiasi
    //tidak perlu lagi seperti let object = new lfaksdjf();
    static help() {
        View.help();
    }
    static show() {
        let todos = Todo.getTodos();
        View.show(todos)
    }
    static add(params) {
        let feedback = Todo.add(params);
        View.message(feedback);
    }
    static delete(params) {
        let feedback = Todo.delete(params);
        View.message(feedback);
    }
    static update(params) {
        let feedback = Todo.update(params)
        View.message(feedback);
    }
    static changeStatus(params) {
        let feedback = Todo.changeStatus(params)
        View.message(feedback);
    }
    static filter(params) {
        let feedback = Todo.filter(params)
        View.message(feedback);
    }
    static message(msg) {
        
    }
}

module.exports = TodoController;