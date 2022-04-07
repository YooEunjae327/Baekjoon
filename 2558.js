const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')

const [...arr] = input

console.log(parseInt(input[0]) + parseInt(input[1]))
