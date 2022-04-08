const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const [...arr] = input

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`${input[i]}\n`)
}
