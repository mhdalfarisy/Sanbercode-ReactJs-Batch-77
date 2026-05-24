console.log("Soal Looping");

// Buatlah function loopingGanjil yang menerima parameter number yang menampilkan
// Looping ganjil sesuai batas parameter number

const loopingGanjil = (number) => {
    // Mulai dari 1, tambah 2 setiap iterasi (selalu ganjil)
    for (let i = 1; i <= number; i += 2) {
        console.log(i);
    }
};

console.log(loopingGanjil(13));
// Output:
// 1
// 3
// 5
// 7
// 9
// 11
// 13

console.log(loopingGanjil(20));
// Output:
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
