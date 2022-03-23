let input = require("fs").readFileSync("./dev/stdin").toString().split("\n")

let n = Number(input[0])
let list = input[1].split(" ")

console.log(list.sort((a, b) => a - b)[0], list.sort((a, b) => b - a)[0])
