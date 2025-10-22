function hitungDiskon(totalBelanja) {
  if (totalBelanja > 50000) {
    console.log("Selamat! Anda mendapat diskon 10% karena belanja di atas Rp 50.000.");
    return totalBelanja * 0.1;
  } else {
    console.log("Belanja di atas Rp 50.000 untuk mendapatkan diskon 10%.");
    return 0;
  }
}

module.exports = hitungDiskon;