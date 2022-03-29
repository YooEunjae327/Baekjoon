const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ")

let a = input[0].split("")
let b = []

for (let i = a.length - 1; i >= 0; i--) {
  b.push(a[i])
}

a.join("") === b.join("") ? console.log("true") : console.log("false")
