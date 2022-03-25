const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

let a = parseInt(input[0])

for (let i = 1; i <= a; i++) {
  for (let j = 1; j < i; j++) {
    process.stdout.write(" ")
  }
  for (let n = 2 * a - 1; n >= 2 * i - 1; n--) {
    process.stdout.write("*")
  }
  console.log("")
}
