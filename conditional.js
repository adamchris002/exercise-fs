// var umur = 14
// var tinggi = 145


// if (umur < 17) {
//     if (tinggi > 150) {
//         console.log("silahkan naik wahana")
//     }
//     else {
//         console.log("Anda tidak boleh menaikki wahana")
//     }
// }
// else {
//     console.log("Anda sudah ketuaan")
// }

// var number = 16

// if (number >= 10 && number <= 15) {
//     console.log("angka Anda berada di antara angka 10 dan 15")
// }
// else {
//     console.log("angka Anda tidak berada diantara angka 10 dan 15")
// }

var beverages = "Teh";
//.toLowerCase() => membuat jadi huruf kecil

// switch(beverages.toLowerCase()) {
//     case 'kopi':
//         console.log("Minuman yang Anda pilih adalah kopi")
//         break;
//     case 'air':
//         console.log("Minuman yang Anda pilih adalah air")
//         break;
//     case 'teh':
//         console.log("Minuman yang Anda pilih adalah teh")
//         break;
//     case 'pocari':
//         console.log("Minuman yang Anda pilih adalah pocari")
//         break;
//     default:
//         console.log("Minuman yang Anda cari tidak ada")
// }


// var nilai = 70;
// if (nilai >= 0 && nilai < 30) {
//     console.log("Nilai karakter kalian adalah E")
// }
// else if (nilai < 50 && nilai >= 30) {
//     console.log("Nilai karakter kalian adalah D")
// }
// else if (nilai < 70 && nilai >=50) {
//     console.log("Nilai karakter kalian adalah C")
// }
// else if (nilai < 85 && nilai >= 70) {
//     console.log("Nilai karakter kalian adalah B")
// }
// else {
//     console.log("Nilai karakter kalian adalah A")
// }

// var bilangan = 5;

// if (bilangan % 2 === 0) {
//     console.log(bilangan + " Adalah Bilangan Genap")
// }
// else {
//     console.log(bilangan + " Adalah Bilangan Ganjil")
// }

// var minuman = "Sweet Tea"

// switch (minuman) {
//     case "":
//         console.log("Input minuman")
//         break;
//     case "Sweet Tea":
//         console.log("You choose Sweet Tea, thanks")
//         break;
//     case "Plain Tea": 
//         console.log("You choose Plain Tea, thanks")
//         break;
//     case "Boba":
//         console.log("You choose Boba, thanks")
//         break;
//     case "Milk Coffee":
//         console.log("You choose Milk Coffee, thanks")
//         break;
//     case "Choco Ice":
//         console.log("You choose Choco Ice thanks")
//         break;
//     default:
//         console.log("minuman is not defined")
// }

var coupon = "FreeOngkir"
var pembelian = 35000

if (coupon === "FreeOngkir") {
    if (pembelian >= 50000) {
        var potongan = pembelian * 0.1
        console.log("Total pembelian Anda Rp. " + (pembelian - potongan))
    }
    else if (pembelian <= 50000 && pembelian >= 30000) {
        var potongan = pembelian * 0.05
        console.log("Total pembelian Anda Rp. " + (pembelian - potongan))
    }
    else {
        var potongan = pembelian * 0.025
        console.log("Total pembelian Anda Rp. " + (pembelian - potongan))
    }
}
else if (coupon === "Free15%") {
    if (pembelian >= 30000) {
        var potongan = pembelian * 0.15
        console.log("Total pembelian Anda Rp. " + (pembelian - potongan))
    }
    else {
        console.log("Total pembelian Anda Rp. " + pembelian)
    }
}
else {
    console.log("Coupon yang Anda pilih tidak ada")
}