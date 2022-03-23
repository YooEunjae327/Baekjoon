const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

let a = parseInt(input[0])
let b = parseInt(input[1])

if (b - 45 == 0) b = 0
else {
  if (b - 45 > 0) b -= 45
  else (b = 60 - (45 - b)), a--
}

if (a <= -1) a = 23

console.log("%d %d", a, b)
