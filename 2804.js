const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ")

let a = input[0]
let b = input[1]
let c,
  d,
  f = 0
console.log(a, b)

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      c = i
      d = j
      f = 1
      break
    }
  }
  if (f == 1) break
}

for (let i = 0; i < b.length; i++) {
  for (let j = 0; j < a.length; j++) {
    if (j == c) process.stdout.write(b[i])
    else if (i == d) process.stdout.write(a[j])
    else process.stdout.write(".")
  }
  console.log()
}
