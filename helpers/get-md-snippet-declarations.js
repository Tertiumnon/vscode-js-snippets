const fs = require('fs');

let rawData = fs.readFileSync('snippets/snippets.json');
let data = JSON.parse(rawData);

const res = [];
for (const prop in data) {
  if (data.hasOwnProperty(prop)) {
    const el = data[prop];
    res.push(
      `${el.prefix} -> ${el.body
        .join(' ')
        .replace(/\t/, '')
        .replace(/\s{2,}/g, ' ')}`
    );
  }
}

fs.writeFile('snippets.txt', res.sort().join('\n'), (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('snippets.txt saved');
});
