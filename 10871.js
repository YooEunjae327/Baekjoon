const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const a = input[0].split(' ')[1]
const b = input[1].split(' ')
let c = ''

for (let i = 0; i < b.length; i++) {
  if (b[i] < parseInt(a)) c += b[i] + ' ' //process.stdout.write(`${b[i]} `)
}

console.log(c)
