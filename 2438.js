const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

let a = parseInt(input[0])

for (let i = 1; i <= a; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*")
  }
  console.log("")
}
