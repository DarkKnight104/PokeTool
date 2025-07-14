const csv = require('csv-parser')
const fs = require('fs')
let results = [];
fs.createReadStream(`tools/kanto.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/kanto.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
fs.createReadStream(`tools/jhoto.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/jhoto.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
fs.createReadStream(`tools/hoenn.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/hoenn.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
fs.createReadStream(`tools/sinnoh.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/sinnoh.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
fs.createReadStream(`tools/unova.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/unova.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
fs.createReadStream(`tools/kalos.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/kalos.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
fs.createReadStream(`tools/alola.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/alola.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
fs.createReadStream(`tools/galar.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/galar.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
fs.createReadStream(`tools/paldea.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/paldea.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
  fs.createReadStream(`tools/national.csv`)
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)})
  .on('end', () => {
    fs.writeFileSync(`docs/data/Dexes/national.json`, JSON.stringify(results, null, 2));
    console.log("pokemon.json creato!");
  });
