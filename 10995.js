const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ")

let a = input[0]

console.log(a)
if (a == 1) console.log("*")
else
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
      if (i % 2 == 0) process.stdout.write("* ")
      else process.stdout.write(" *")
    }
    console.log()
  }
