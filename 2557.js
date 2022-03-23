const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(/ |\n/g)

let a = parseInt(input[0])
let b = parseInt(input[1])
let c = parseInt(input[2])
let si, bu

si = a + Math.floor((b + c) / 60)
b + c >= 60 ? (bu = b + c - Math.floor((b + c) / 60) * 60) : (bu = b + c)
if (si >= 24) si -= 24

console.log("%d %d", si, bu)
