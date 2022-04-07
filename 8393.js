const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ')

const a = input[0]
let b = 0

for (let i = 1; i <= a; i++) b += i

console.log(b)
