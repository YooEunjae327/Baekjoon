const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

let a = parseInt(input[0]),
  b = parseInt(input[1])

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(Math.floor(a / b))
console.log(a % b)