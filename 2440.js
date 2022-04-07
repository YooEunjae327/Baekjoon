const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ')

const a = input[0]

for (let i = a; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    process.stdout.write('*')
  }
  console.log()
}
