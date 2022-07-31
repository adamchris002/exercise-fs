// ES5

// function cekGanjilGenap(num) {
//     if (num %2 == 0) {
//         return "genap"
//     }
//     else {
//         return "ganjil"
//     }
// }


//dalam if terdapat istilah ternary
//ternary adalah struktur conditional yang hanya 2 kondisi
// true atau false

//dapat dirubah menjadi  :
// num %2 === 0 ? 'genap' : 'ganjil'




// ES6

// const cekGanjilGenap = (num) => {
//     return num % 2 === 0 ? 'genap' : 'ganjil'
// }

//bisa dipersingkat lagi

// const cekGanjilGenap = num => num %2 === 0 ? 'genap' : 'ganjil'
// console.log(cekGanjilGenap(5))



//HIGH ORDER FUNCTION

// 1. tampilkan tiap angka menggunakan .forEach()

let scores = [100, 50, 75, 25, 70]

//ES5

// for (let i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
// }

// ES6

// scores.forEach(score => {
//     console.log(score);
// })

// 2. kalikan 5 di tiap2 angka menggunakan .map()

// ES5

// let temp = []

// for (let i = 0; i < scores.length; i++) {
//     temp.push(scores[i] * 5);
// }

scores = scores.map(score => score * 5);

// console.log(scores);

// 3. pilih angka di atas 250 menggunkaan .filter()

//ES5

// let temp = []

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > 250) {
//         temp.push(scores[i]);
//     }
// }

//ES6

scores = scores.filter(score => score > 250);

// console.log(temp);
// console.log(scores);


// Study Case 2

//diketahui sebuah angka fibonacci.

let fibonacci = [1,1,2,3,5,8,13,21]

// a. buat function untuk mengkalikan dengan dirinya sendiri (pangkat 2)
// [1,1,3,9,25,64,169,441]
// b. function untuk memilih angka dia atas 5
// [9,25,64,169,441]
// c. function untuk tampilkan angka-angka tersebut


// soal a

//ES5

// function fibPangkat (array) {
//     let temp = [];
//     for (let i = 0; i < array.length; i++) {
//         temp.push(array[i] *= array [i]);
//     }
//     return temp;
// }

//ES6

// const fibPangkat = (array) => array = array.map(element => element * element);

// console.log(fibPangkat(fibonacci))


// soal b

//ES5

// function sortFibbonaci(array) {
//     let newList = fibPangkat(array);
//     let temp = [];
//     for (let i = 0; i < newList.length; i++) {
//         if (newList[i] > 5) {
//             temp.push(newList[i]);
//         }
//     }
//     return temp;
// }

//ES6

// const sortFibbonaci = (array) => {
//     let newList = fibPangkat(array);
//     return newlist = newList.filter(element => element > 5);
// }

// console.log(sortFibbonaci(fibonacci));

// soal c

//ES5

// function printFunction(array) {
//     let temp = sortFibbonaci(array);
//     for (let i = 0; i < temp.length; i++) {
//         console.log(temp[i]);
//     }
// }

//ES6
// const printFunction = (array) => {
//     let temp = sortFibbonaci(array);
//     temp.forEach(element => console.log(element));
// }

// printFunction(fibonacci);


//ES6 METHOD PALING SINGKAT

// fibonacci.map(num => num ** 2).filter(num => num > 5).forEach(num => console.log(num));


//// TEMPLATE LITERAL

//ES5 
let kata1 = "saya";
let kata2 = "makan";
let kata3 = "siang";

// saya makan siang
// console.log(kata1 + " " + kata2 + " " + kata3);

//ES6
// console.log(`${kata1} ${kata2} ${kata3}`);

//DESTRUCTURING

let students = ["vincent", 3.21, true];

//ES5

// let name = students [0];
// let gpa = students [1]
// let isGraduated = students[2];

//ES6
// let [name, gpa, isGraduated] = students
// console.log(name, gpa, isGraduated);

// let item = {
//     type: "groceries",
//     price: 10000
// }

// let {type, price} = item;
// console.log(type, price);
