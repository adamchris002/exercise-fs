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

switch(beverages.toLowerCase()) {
    case 'kopi':
        console.log("Minuman yang Anda pilih adalah kopi")
        break;
    case 'air':
        console.log("Minuman yang Anda pilih adalah air")
        break;
    case 'teh':
        console.log("Minuman yang Anda pilih adalah teh")
        break;
    case 'pocari':
        console.log("Minuman yang Anda pilih adalah pocari")
        break;
    default:
        console.log("Minuman yang Anda cari tidak ada")
}