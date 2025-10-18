var dataMotoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy"
    }
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK"
    }
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy"
    }
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy"
    }
  }
];

var hasilPengelompokan = {};

for (var i = 0; i < dataMotoGP.length; i++) {
  var negara = dataMotoGP[i].winner.country;

  if (!hasilPengelompokan[negara]) {
    hasilPengelompokan[negara] = [];
  }

  hasilPengelompokan[negara].push(dataMotoGP[i]);
}

console.log("Hasil pengelompokan berdasarkan Negara Pemenang:\n");

for (var negara in hasilPengelompokan) {
  console.log("Negara: " + negara);
  for (var j = 0; j < hasilPengelompokan[negara].length; j++) {
    var race = hasilPengelompokan[negara][j];
    console.log(
      (j + 1) + ". " + race.winner.firstName + " " + race.winner.lastName +
      " menang di " + race.circuit + ", " + race.location
    );
  }
  console.log("");
}
