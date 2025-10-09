const prompt = require("prompt-sync")();

let nomor = parseInt(prompt("Masukan nomor punggung pemain: "));

if (nomor % 2 === 0) {
  console.log("Posisi: target attacker");
  if (nomor >= 50 && nomor <= 100) {
    console.log("Berhak dipilih menjadi kapten tim");
  }
} else {
  console.log("Posisi: defender");
  if (nomor > 90) console.log("Posisi tambahan: playmaker");
  if (nomor % 3 === 0 && nomor % 5 === 0) console.log("Posisi tambahan: keeper");
}