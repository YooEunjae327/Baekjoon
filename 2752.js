const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")
let [...arr] = input
let a = input
  .sort((a, b) => a - b)
  .map((x) => parseInt(x))
  .join(" ")

console.log(a)
