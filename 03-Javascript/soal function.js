console.log("Soal 1");

// Greetings
// Buatlah sebuah function greetings() yang menerima satu parameter berupa string.

function greetings(nama) {
    // Capitalize huruf pertama nama
    let namaCapitalized = nama.charAt(0).toUpperCase() + nama.slice(1);
    return `Halo ${namaCapitalized} selamat datang di sanbercode`;
}

console.log(greetings("rezky")); // Halo Rezky selamat datang di sanbercode
console.log(greetings("budi"));  // Halo Budi selamat datang di sanbercode
console.log(greetings("randi")); // Halo Randi selamat datang di sanbercode
console.log(greetings("ahmad")); // Halo Ahmad selamat datang di sanbercode

console.log("Soal 2");

// kalikan()
// Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian
// dua parameter

function kalikan(num1, num2) {
    return num1 * num2;
}

console.log(kalikan(2, 2)); // 4
console.log(kalikan(9, 2)); // 18
console.log(kalikan(5, 5)); // 25
console.log(kalikan(6, 8)); // 48
