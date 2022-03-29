const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n")

let a = input[0]
let b = input[1].split("")

for (let i = 0; i < b.length; i++) {
  if (b[i] == "?") {
    if (b[b.length - i - 1] == "?") (b[i] = "a"), (b[b.length - i - 1] = "a")
    else b[i] = b[b.length - i - 1]
  }
}

console.log(b.join(""))
