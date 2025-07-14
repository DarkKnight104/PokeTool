const csv = require('csv-parser');
const fs = require('fs');

for (let i = 0; i < 10; i++) {
  let fileName = '';
  let outputName = '';

  switch (i) {
    case 0: fileName = 'kanto'; break;
    case 1: fileName = 'jhoto'; break;
    case 2: fileName = 'hoenn'; break;
    case 3: fileName = 'sinnoh'; break;
    case 4: fileName = 'unova'; break;
    case 5: fileName = 'kalos'; break;
    case 6: fileName = 'alola'; break;
    case 7: fileName = 'galar'; break;
    case 8: fileName = 'paldea'; break;
    case 9: fileName = 'national'; break;
  }

  const results = []; // define locally per loop iteration

  fs.createReadStream(`tools/${fileName}.csv`)
    .pipe(csv())
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', () => {
      fs.writeFileSync(`docs/data/Dexes/${fileName}.json`, JSON.stringify(results, null, 2));
      console.log(`${fileName}.json creato!`);
    });
}
