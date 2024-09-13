const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
const arr = [...new Set(input)];

console.log(
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'),
);
