//contoh function untuk mengcut dan menghitung jumlah string

// function splitToArray(str) {
//     var tempArray = str.split(" ");
//     return tempArray;
// }

// function jumlahKata(kalimat) {
//     var result = splitToArray(kalimat);
//     var arrayLength = result.length;
//     return arrayLength;
// }

// var kalimat = "Hallo nama saya Adam";

// console.log(jumlahKata(kalimat));

//Study Case 1
//cari faktor dari sebuah bilangan

function findFactor(num) {
    for (var i = 1; i <= num; i++) {
        if(num % i == 0) {
            console.log(i);
        }
    }
}

var num = 12;
// findFactor(num);

//Study Case 2
//cek apakah bilangan prima atau bukan
//Bilangan prima adalah bilang yang hanya memiliki 2 faktor
//Buat 2 functions: function countFactors dan checkPrime



function countFactor(num) {
    var temp = [];
    for (var i = 1; i <= num; i++) {
        if(num % i == 0) {
            temp.push(i);
        }
    }
    return temp.length;
}

function checkPrime(nomor) {
    var jumlahFaktor = countFactor(nomor);

    if (jumlahFaktor === 2) {
        console.log(nomor + " adalah angka prima");
    }
    else {
        console.log(nomor + " bukan angka prima");
    }
}

// checkPrime(51);
// checkPrime(53);
// checkPrime(57);
// checkPrime(59);
// checkPrime(37);

//Study Case 3
//buat segitiga '#' dan 'X'

function triangle(n) {
    var string = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j <= i; j++) {
            if (j % 2 !== 0) {
                string += "X";
            }
            else {
                string += "#";
            }
        }
        string += "\n";
    }
    console.log(string);
}

var nomor = 5;

// triangle(nomor);


//Study Case 4
//buat kotak kosong

function rectangle(n) {
    if (n % 2 !== 0) {
        var string1 = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (j == 0 || i == 0 || i == n - 1 || j == n - 1) {
                string1 += "*";
            }
            else {
                string1 += " ";
            }
        }
        string1 += "\n";
    }
    console.log(string1);
    }
    else {
        console.log("angka harus ganjil");
    }
}

// rectangle(5);
// rectangle(4);

//Study Case 5
//buat kotak kosong, tetapi ada tengahnya

function newRectangle(n) {
    if (n % 2 !== 0) {
        var string2 = "";
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (i == 0 || i == n - 1) {
                    string2 += "#";
                }
                else if (j == 0 || j == n - 1) {
                    string2 += "@";
                }
                else if (j == Math.floor(n / 2) && i == Math.floor(n / 2)) {
                    string2 += "$";
                }
                else {
                    string2 += " ";
                }
            }
            string2 += "\n";
        }
        console.log(string2);
    }
    else {
        console.log("Angka yang dimasukkan harus ganjil")
    }
}

newRectangle(7);
