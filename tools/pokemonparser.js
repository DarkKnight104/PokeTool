const fs = require('fs');
const region = "unova"

let data = fs.readFileSync(`tools/${region}.csv`, 'utf8');

// Remove commas at end of lines
data = data.replace(/,\s*$/gm, '');

fs.writeFileSync(`tools/${region}.csv`, data);