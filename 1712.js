const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

const [...arr] = input
const a = parseInt(input[0])
const b = parseInt(input[1])
const c = parseInt(input[2])
let ch

c <= b ? (ch = -1) : (ch = Math.floor(a / (c - b)) + 1)
console.log(ch)
