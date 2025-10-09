const prompt = require("prompt-sync")();
let nama = prompt("Masukkan nama: ");
let umur = parseInt(prompt("Masukkan umur: "));
let tempat = prompt("Masukkan tempat tinggal: ");
let tabungan = parseFloat(prompt("Masukkan jumlah tabungan (USD): "));

let hasil = `${nama} tidak mencurigakan.`;

// Don
if (umur > 40 && 
   (tempat === "Nevada" || tempat === "New York" || tempat === "Havana") &&
   tabungan > 10000000) {
  hasil = `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Don.`;
}
// Underboss
else if (umur >= 25 && umur <= 40 &&
   (tempat === "New Jersey" || tempat === "Manhattan" || tempat === "Nevada") &&
   tabungan >= 1000000 && tabungan <= 2000000) {
  hasil = `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Underboss.`;
}
// Capo
else if (umur >= 18 && umur <= 24 &&
   (tempat === "California" || tempat === "Detroit" || tempat === "Boston") &&
   tabungan < 1000000) {
  hasil = `${nama} kemungkinan adalah seorang anggota mafia dengan pangkat Capo.`;
}

console.log(hasil);