// JsON => JS Object Notation

//JsON bukan bahasa programming
//JsON merupakan format / notasi
//JsON bukan framework / library

// Dalam node.js ada package / modul : File System, process.argv, dst
//Kita akan gunakan fs.writeFileSync dan fs.readFileSync

const fs = require('fs')

const getData = () => {
    let programmer = fs.readFileSync('./data.json', 'utf8');
    //untuk mengubah teks file menjadi object javascript yang bisa digunakan
    programmer = JSON.parse(programmer)

    console.log(programmer);
};

getData();