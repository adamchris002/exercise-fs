// var orang = {
//     name : "Caca",
//     hobbies : ["Nonton", "Makan"],
//     umur : "20",
//     weight : 55,
//     height : 164,
//     ableToCode : true,
//     profile : {
//         city : "bandung",
//         tempatlahir : "surabaya",
//         domisili : {
//             alamat : "Jalan Pluto Blok B7 No. 33",
//             kota : "tangerang selatan",
//             provinsi : "Banten"
//         }
//     },

//     addNewHobby : function(hobby) {
//         this.hobbies.push(hobby);
//     },

//     sebutkanHobby : function() {
//         for (var i = 0; i < this.hobbies.length; i++) {
//             console.log((i + 1) + ". " + this.hobbies[i]);
//         }
//     }
// }

// console.log(caca["100"]);
// console.log(caca.profile.domisili);

// orang.addNewHobby("Tidur");
// orang.sebutkanHobby();

//studi kasus 1

var items = [
    
    {
        id : 1, 
        name : "masker sensa",
        price : 35000,
        isSold : true,
        stock : 50
    },
    {
        id : 2, 
        name : "susu beruang",
        price : 15000,
        isSold : true,
        stock : 50
    },
    {
        id : 3, 
        name : "minyak goreng",
        price : 35000,
        isSold : false,
        stock : 50
    }

]

function showItems() {
    console.log(items);
    for (var i = 0; i < items.length; i++) {
        if (items[i].isSold === true) {
            console.log(i + 1 + ". " + "[X] " + items[i].name + ", Rp. " + items[i].price + ". , " + items[i].stock + " pcs");
        }
        else {
            console.log(i + 1 + ". " + "[ ] " + items[i].name + ", Rp. " + items[i].price + ". , " + items[i].stock + " pcs");
        }
    }
}

function showItemsInTable() {
    console.table(items);
}

function addItem(name, price, isSold, stock) {
    var lastIndex = items.length - 1;
    var id = items[lastIndex].id + 1;
    var tempResult = {
        id,
        name,
        price,
        isSold,
        stock
    }
    items.push(tempResult);
    console.log('"' + name + '"' + "has been added to the list!");
}

function deleteItem(id) {
    var tempResult = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].id !== id) {
            tempResult.push(items[i]);
        }
    }

    // jika ukuran di temp result tidak sama dengan ukuran di items maka 
    //akan dituliskan id not found
    // hanya untuk memberi tahu bahwa itemnya tidak terhapus (itemsnya masih ada)
    if (tempResult.length === items.length) {
        console.log("id " + id + " not found.");
    }

    else {
        //overwrite ke items, sehingga mirip seperti "Delete"
        //jika ukuran yang ada di tempresult tidak sama dengan ukuran di items maka
        //data dari temp results akan dimasukkan ke dalam items
        items = tempResult;
        console.log("Id " + id + " has been deleted");
    }
}

//A. buatlah sebuah function untuk mencetak isi Items

//result:

//List Items:
//1. [X] masker sensa, Rp. 100000
//2. [X] susu beruang, Rp. 15000
//3. [ ] minyak goreng, Rp. 35000


addItem("OPPO A9 20", 3500000, true, 3);
deleteItem(4);
showItems();
// showItemsInTable();

