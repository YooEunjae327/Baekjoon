const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(/\n/g)

let a = parseInt(input[0])
let b = parseInt(input[1])
let c = b.toString()

console.log(a * c[2])
console.log(a * c[1])
console.log(a * c[0])
console.log(a * c)
