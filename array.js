//Array

// var scores = [100, 50, 75, 70, 35];

// for ( var i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
// }

//Study Case 1; Hitung Jumlah total dari scores

// var jumlah = 0;

// for (var i = 0; i < scores.length; i++) {
//     jumlah += scores[i];
// }
// console.log("Jumlah dari array scores adalah = " + jumlah);

//Study Case 2: Hitung rata-rata dari scores di atas

// var jumlah2 = 0;

// for (var i = 0; i < scores.length; i++) {
//     jumlah2 += scores[i];
// }

// var rata2 = jumlah2/scores.length;

// console.log("Hasil rata-rata dari array scores adalah = " + rata2);

//Study Case 3

// var stats = [
//     [1,2,3],
//     [-1],
//     [10,20,30,40,50],
//     [-5,-7],
//     [15,17,19]
// ]

// var total = 0;
// var total1 = 0;

// a. Hitung total semua angka

// for (var i = 0; i < stats.length; i++) {
//     for (var j = 0; j < stats[i].length; j++) {
//         total += stats[i][j];
//     }
// }

// console.log(total);

//b. Hitung angka yang mengandung belasan

// var angkabelasan = 0;

// for (var i = 0; i < stats.length; i++) {
//     for (var j = 0; j < stats[i].length; j++) {
//         if (stats[i][j] >= 11 && stats[i][j] <= 20) {
//             angkabelasan += stats[i][j];
//         }
//     }
// }

// console.log(angkabelasan);

// c. Kelompokkan angka yang minus

// var angkaminus = []

// for (var i = 0; i < stats.length; i++) {
//     for (var j = 0; j < stats[i].length; j++) {
//         if (stats[i][j] < 0) {
//             angkaminus.push(stats[i][j]);
//         }
//     }
// }

// console.log(angkaminus);

// soal latihan
var string = "";

var murid = [
    [1, "Vincent", 3.5],
    [2, "Adam", 3.0],
    [3, "Mamang", 2.1]
]

// for (var i = 0; i < murid.length; i++) {
//     if (murid[i][2] >= 3.0) {
//         console.log(murid[i][0] + ". " + murid[i][1] + ". " + murid[i][2] + ", Lulus");
//     }
//     else {
//          console.log(murid[i][0] + ". " + murid[i][1] + ". " + murid[i][2] + ", Tidak Lulus");
//     }
// }

// console.log(string);


//iseng
// for (var i = 0; i < murid.length; i++) {
//     for (var j = 0; j < murid[i].length; j++) {
//         if (murid[i][j] === 'number') {
//             string += murid[i][j] + " ";
//         }
//     }
// }

// console.log(string);