const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const region = "unova"
fs.createReadStream(`tools/${region}.csv`)
  .pipe(csv())
  .on('data', (data) => {
    const num = parseInt(data.Number)
    if (num <= 151) data.Gen = 1;
    else if (num <= 251) data.Gen = 2;
    else if (num <= 386) data.Gen = 3;
    else if (num <= 493) data.Gen = 4;
    else if (num <= 649) data.Gen = 5;
    else if (num <= 721) data.Gen = 6;
    else if (num <= 809) data.Gen = 7;
    else if (num <= 905) data.Gen = 8;
    else data.Gen = 9;
    delete data["_4"];
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/${region}.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
