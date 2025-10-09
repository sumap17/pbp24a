const prompt = require('prompt-sync')({ sigint: true });

const coding = Number(prompt("Masukkan nilai coding (0-100): "));
const interview = prompt("Masukkan nilai interview (A/B/C/D): ").toUpperCase();

let hasilCoding =
  coding > 80 ? "LOLOS" :
  coding >= 60 ? "DIPERTIMBANGKAN" :
  "GAGAL";

let hasilInterview = (interview === "A" || interview === "B") ? "LOLOS" : "GAGAL";

if ((hasilCoding !== "GAGAL") && hasilInterview === "LOLOS") {
  console.log("Selamat kamu berhasil menjadi calon programmer");
} else {
  console.log("Maaf kamu belum berhasil menjadi calon programmer");
}