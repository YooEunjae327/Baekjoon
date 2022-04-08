const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

let a = 0
const b = input[1].split('').map((x) => parseInt(x))

for (let i = 0; i < b.length; i++) {
  a += b[i]
}

console.log(a)
