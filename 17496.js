const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ")

const [...arr] = input
let ch = 0

for (let i = 1; i <= input[0]; i += parseInt(input[1])) {
  if (i + parseInt(input[1]) <= input[0]) {
    ch += parseInt(input[2])
    console.log(ch)
  }
}

console.log("%d", ch * parseInt(input[3]))
