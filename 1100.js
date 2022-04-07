let input = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .replace(/\r/g, '')
  .split(/ |\n/g)

const a = input[0]
const [...arr] = input
let b = 0

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2 !== 0) {
      if (j % 2 !== 0) input[i][j] == 'F' ? b++ : 0
    } else if (j % 2 == 0) input[i][j] == 'F' ? b++ : 0
  }
}
console.log(b)
