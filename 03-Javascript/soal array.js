console.log("Soal 1");

// Array Multidimensional
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring",  "Medan",          "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona",          "Ambon",           "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura",       "6/4/1970",   "Berkebun"]
];

const dataHandling = (inputArray) => {
    inputArray.forEach((item) => {
        console.log("Nomor ID: ",    item[0]);
        console.log("Nama Lengkap: ", item[1]);
        console.log("TTL: ",         item[2], item[3]);
        console.log("Hobi: ",        item[4]);
        console.log(""); // baris kosong antar data
    });
};

console.log(dataHandling(input));

// OUTPUT
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun

console.log("Soal 2");

// Kombinasikan dua array menggunakan array spreading ES6
const people1 = ["Will",  "Chris", "Sam",   "Holly"];
const people2 = ["Gill",  "Brian", "Noel",  "Maggie"];

const combine = [...people1, ...people2];

console.log(combine);
// Output:
// ["Will", "Chris", "Sam", "Holly", "Gill", "Brian", "Noel", "Maggie"]
