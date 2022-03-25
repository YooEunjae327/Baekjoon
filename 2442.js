const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

let a = parseInt(input[0])

for (let i = a; i >= 1; i--) {
  for (let j = i; j > 1; j--) process.stdout.write(" ")
  for (let n = 2 * a; n > 2 * i - 1; n--) process.stdout.write("*")
  console.log("")
}
