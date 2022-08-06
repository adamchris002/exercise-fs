class View {
    static help() {
        console.log("Todo Apps commands: ");
        console.log("node index.js help");
        console.log("node index.js show");
        console.log("node index.js add <task>");
        console.log("node index.js delete <id>");
        console.log("node index.js update <id, task>");
        console.log("node index.js changeStatus <id>");
        console.log("node index.js filter <status>");
    }

    static show(todos) {
        console.log(todos)
    }

    static message (msg) {
        console.log(msg);
    }
}

module.exports = View;