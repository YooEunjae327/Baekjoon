const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")
let a = parseInt(input[0])
let b = parseInt(input[1])
let c = parseInt(input[2])

console.log(
  "%d\n%d\n%d\n%d",
  (a + b) % c,
  ((a % c) + (b % c)) % c,
  (a * b) % c,
  ((a % c) * (b % c)) % c
)
