console.log("Soal 1");

let sentences = 'wow javascript is so awesome';

// 'wow javascript is so awesome'
//  0123456789...
// wow       = index 0  s/d 3  → substring(0, 3)
// javascript = index 4  s/d 14 → substring(4, 14)
// is         = index 15 s/d 17 → substring(15, 17)
// so         = index 18 s/d 20 → substring(18, 20)
// awesome    = index 21 s/d 28 → substring(21, 28)

let firstWords  = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords  = sentences.substring(15, 17);
let fourthWords = sentences.substring(18, 20);
let fifthWords  = sentences.substring(21, 28);

let panjangKata1 = firstWords.length;
let panjangKata2 = secondWords.length;
let panjangKata3 = thirdWords.length;
let panjangKata4 = fourthWords.length;
let panjangKata5 = fifthWords.length;

console.log('Kata Pertama: ' + firstWords  + " dan panjang " + panjangKata1 + " karakter");
console.log('Kata Kedua: '   + secondWords + " dan panjang " + panjangKata2 + " karakter");
console.log('Kata Ketiga: '  + thirdWords  + " dan panjang " + panjangKata3 + " karakter");
console.log('Kata Keempat: ' + fourthWords + " dan panjang " + panjangKata4 + " karakter");
console.log('Kata Kelima: '  + fifthWords  + " dan panjang " + panjangKata5 + " karakter");

// Kata Pertama: wow dan panjang 3 karakter
// Kata Kedua: javascript dan panjang 10 karakter
// Kata Ketiga: is dan panjang 2 karakter
// Kata Keempat: so dan panjang 2 karakter
// Kata Kelima: awesome dan panjang 7 karakter

console.log("Soal 2");

let kata1 = "keberuntugan";
let kata2 = "kerja keras";
let kata3 = "ketekunan";

// template literal / template string
let kalimat = `Masa depan tidak ditentukan oleh ${kata1}, tetapi oleh ${kata2} dan ${kata3}`;
console.log(kalimat);
