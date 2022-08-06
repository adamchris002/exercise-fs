//process.argv => untuk mengambil inputan dari terminal

const command = process.argv[2]; // process.argv adalah array
const params = process.argv.slice(3); //untuk mengambil array dari index ke-3 dan seterusnya
const TodoController = require('./controllers/TodoController');

switch (command) {
    case 'help' :
        console.log("help");
        TodoController.help();   
        break;
    case 'show' :
        console.log("show");
        TodoController.show();
        break;
    case 'add' :
        console.log("add");
        TodoController.add(params);
        break;
    case 'delete' :
        console.log("delete");
        TodoController.delete(params);
        break;
    case 'update' :
        console.log("update");
        TodoController.update(params);
        break;
    case 'changeStatus' :
        console.log("changeStatus");
        TodoController.changeStatus(params);
        break;
    case 'filter' :
        console.log("filter");
        TodoController.filter(params);
        break;
    default:
        TodoController.message("Unknown command.");
}