const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

const a = parseInt(input[0])

for (let i = 1; i <= 9; i++) console.log("%d * %d = %d", a, i, a * i)
