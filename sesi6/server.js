const http = require("http");

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

const server = http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "application/json" });

  // 1) Tampilkan seluruh data
  if (req.url === "/") {
    res.end(JSON.stringify(motoGP, null, 2));
  }

  // 2) Kelompokkan berdasarkan negara
  else if (req.url === "/country") {
    let result = {};

    for (let i = 0; i < motoGP.length; i++) {
      let country = motoGP[i].winner.country;

      if (!result[country]) {
        result[country] = { winningCircuits: [], totalWin: 0 };
      }

      result[country].winningCircuits.push({
        name: motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName,
        winLocation: motoGP[i].circuit + ", " + motoGP[i].location
      });

      result[country].totalWin++;
    }

    res.end(JSON.stringify(result, null, 2));
  }

  // 3) Kelompokkan berdasarkan nama pemenang
  else if (req.url === "/name") {
    let result = {};

    for (let i = 0; i < motoGP.length; i++) {
      let name = motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName;

      if (!result[name]) {
        result[name] = { winLocations: [], totalWin: 0 };
      }

      result[name].winLocations.push(motoGP[i].circuit + ", " + motoGP[i].location);
      result[name].totalWin++;
    }

    res.end(JSON.stringify(result, null, 2));
  }

  // 4) Selain route di atas → Bad Request
  else {
    res.end("Bad Request");
  }

});

server.listen(8000, () => {
  console.log("Server berjalan di http://localhost:8000");
});