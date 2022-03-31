const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ")

let a = input[0]
let b = 0,
  c = 0

for (let i = 0; i < a; i++) {
  i % 2 == 0 ? b++ : c++
}

for (let i = 0; i < a; i++) {
  for (let j = 0; j < b; j++) {
    process.stdout.write("* ")
  }
  console.log()
  for (let n = 0; n < c; n++) {
    process.stdout.write(" *")
  }
  console.log()
}
