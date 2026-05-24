console.log("Soal 1");

// if, else if, else
const predikatNilai = (nilai) => {
    if (nilai >= 80) {
        return "A (Sangat Baik)";
    } else if (nilai >= 70 && nilai < 80) {
        return "B (Baik)";
    } else if (nilai >= 60 && nilai < 70) {
        return "C (Cukup)";
    } else if (nilai >= 50 && nilai < 60) {
        return "D (Kurang)";
    } else {
        return "E (Error)";
    }
};

console.log(predikatNilai(94)); // A (Sangat Baik)
console.log(predikatNilai(77)); // B (Baik)
console.log(predikatNilai(63)); // C (Cukup)
console.log(predikatNilai(54)); // D (Kurang)
console.log(predikatNilai(30)); // E (Error)

console.log("Soal 2");

// Switch Case
const trafficLight = (string) => {
    switch (string) {
        case "red":
            return "berhenti";
        case "yellow":
            return "hati-hati";
        case "green":
            return "berjalan";
        default:
            return "warna tidak dikenal";
    }
};

console.log(trafficLight("red"));    // berhenti
console.log(trafficLight("yellow")); // hati-hati
console.log(trafficLight("green"));  // berjalan

console.log("Soal 3");

// Ternary Operator
let angka = 2;

// Sebelum (if-else biasa):
// if (angka === 2) {
//     console.log("angka nya 2")
// } else {
//     console.log("bukan angka 2")
// }

// Sesudah (ternary operator):
console.log(angka === 2 ? "angka nya 2" : "bukan angka 2");
