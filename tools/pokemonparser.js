const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('pokemon.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    fs.writeFileSync('public/pokemon.json', JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
