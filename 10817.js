const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")
let [...arr] = input

console.log(parseInt(input.sort((a, b) => b - a)[1]))
