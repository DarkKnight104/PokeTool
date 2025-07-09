const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('tools/national.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    fs.writeFileSync('docs/data/national.json', JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
