const fs = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')

fs[0] == '' ? console.log(0) : console.log(fs.length)
