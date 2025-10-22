// Import modul sesuai lokasi file
const daftarGame = require('./folder1/game');
const hitungTotal = require('./folder1/folder2/total');
const hitungDiskon = require('./folder1/folder2/folder3/diskon');
const cetakStruk = require('./folder1/folder2/folder3/folder4/cetak');

console.log("Selamat Datang di SumapStore.ID!\n");
daftarGame();

console.log("\nTransaksi Pembelian:\n");

// Jumlah item yang dibeli
let valorant = 2;
let genshin = 1;
let ml = 3;
let minecraft = 1;

// Harga satuan
let hargaValorant = 30000;
let hargaGenshin = 50000;
let hargaML = 20000;
let hargaMinecraft = 60000;

// Tampilkan detail pembelian
console.log(`Valorant   : ${valorant} x Rp${hargaValorant} = Rp${valorant * hargaValorant}`);
console.log(`Genshin    : ${genshin} x Rp${hargaGenshin} = Rp${genshin * hargaGenshin}`);
console.log(`MobileLegends: ${ml} x Rp${hargaML} = Rp${ml * hargaML}`);
console.log(`Minecraft  : ${minecraft} x Rp${hargaMinecraft} = Rp${minecraft * hargaMinecraft}`);

// Hitung total belanja
let totalBelanja = hitungTotal(
  valorant * hargaValorant,
  genshin * hargaGenshin,
  ml * hargaML,
  minecraft * hargaMinecraft
);

console.log(`\nTotal Belanja: Rp ${totalBelanja}`);

// Hitung diskon (10%)
let potongan = hitungDiskon(totalBelanja);
let totalAkhir = totalBelanja - potongan;

console.log(`Total Bayar Setelah Diskon: Rp ${totalAkhir}`);

// Cetak struk
cetakStruk(totalAkhir);