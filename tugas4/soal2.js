var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

// Kelompokkan berdasarkan negara pemenang
let result = {};

for (let i = 0; i < motoGP.length; i++) {
  let country = motoGP[i].winner.country;

  if (!result[country]) {
    result[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  result[country].winningCircuits.push({
    name: `${motoGP[i].winner.firstName} ${motoGP[i].winner.lastName}`,
    winLocation: `${motoGP[i].circuit}, ${motoGP[i].location}`
  });

  result[country].totalWin++;
}
for (let country in result) {
  console.log(`${country}:`);
  console.log("  Winning Circuits:");
  result[country].winningCircuits.forEach(circuit => {
    console.log(`   - ${circuit.name} (${circuit.winLocation})`);
  });
  console.log(`  Total Win: ${result[country].totalWin}`);
  console.log();
}
