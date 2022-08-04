// JsON => JS Object Notation

//JsON bukan bahasa programming
//JsON merupakan format / notasi
//JsON bukan framework / library

// Dalam node.js ada package / modul : File System, process.argv, dst
//Kita akan gunakan fs.writeFileSync dan fs.readFileSync

const fs = require('fs')

const getEmployeesData = () => {
    let programmer = fs.readFileSync('./data.json', 'utf8');
    //untuk mengubah teks file menjadi object javascript yang bisa digunakan
    programmer = JSON.parse(programmer)

    return programmer;
};

const showData = () => {
    let employees = getEmployeesData();
    //destructuring
    employees.forEach((elements) => {
        const {id, name, age, gender} = elements;
        if (gender === "male") {
            console.log(`${id}. (M) ${name}, ${age} years old`);
        }
        else if (gender === "female") {
            console.log(`${id}. (F) ${name}, ${age} years old`);
        }
        else {
            console.log(`${id}. (O) ${name}, ${age} years old`);
        }
    });
}



// ...params => rest / spread parameter
const addEmployee = (...params) => {
    let employees = getEmployeesData();
    let lastIndex = employees.length - 1;
    let id = employees[lastIndex].id + 1;
    const [name, age, gender, job, isSingle, hobbies] = params;
    let tempObj= {
        id,
        name,
        age,
        gender,
        job,
        isSingle,
        hobbies: hobbies || [],
    };
    employees.push(tempObj);
    save(employees);
}

const save = (employees) => {
    let employeeString = JSON.stringify(employees, null, 3);
    fs.writeFileSync("./data.json", employeeString);
}


addEmployee("Joko", 22, "male", "tukang fotokopi", true, ["fotokopi"]);
showData();