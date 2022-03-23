const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

let a = parseInt(input[0]),
  b = parseInt(input[1]),
  c = parseInt(input[2])
let ar = [a, b, c]

if (a == b) {
  a == c
    ? console.log("%d", 10000 + a * 1000)
    : console.log("%d", 1000 + a * 100)
} else if (a == c) {
  console.log("%d", 1000 + a * 100)
} else {
  b == c
    ? console.log("%d", 1000 + c * 100)
    : console.log(ar.sort((a, b) => b - a)[0] * 100)
}
