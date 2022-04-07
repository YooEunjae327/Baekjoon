const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ')

const a = input[0]

let b = ''

for (let i = a; i >= 1; i--) b += i + '\n'

console.log(b)
