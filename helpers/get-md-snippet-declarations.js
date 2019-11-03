const fs = require('fs');

let res = '';

let rawData = fs.readFileSync('snippets/snippets.json');
let data = JSON.parse(rawData);

for (const prop in data) {
  if (data.hasOwnProperty(prop)) {
    const el = data[prop];
    res += `${el.prefix} -> ${(el.body.join(' ')).replace(/\t/, '')}\n`;
  }
}

console.log(res);
