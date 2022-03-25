const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

let a = parseInt(input[0])

for (let i = 0; i < a; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write(" ")
  }
  for (let n = 2 * a - 2; n > 2 * i - 1; n--) process.stdout.write("*")
  console.log("")
}

for (let i = a - 1; i > 0; i--) {
  for (let j = i - 1; j > 0; j--) {
    process.stdout.write(" ")
  }
  for (let n = 2 * i - 1; n <= 2 * a - 1; n++) process.stdout.write("*")
  console.log("")
}
