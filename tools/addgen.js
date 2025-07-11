const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const region = "unova"
fs.createReadStream(`tools/${region}.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/${region}.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
