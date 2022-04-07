const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split(' ')

const a = input[0]

for (let i = 0; i < a; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write(' ')
  }

  for (let n = a; n > i; n--) {
    process.stdout.write('*')
  }
  console.log()
}
