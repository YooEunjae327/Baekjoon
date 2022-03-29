const fs = require("fs")
let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split(/ |\n/g)

let [...arr] = input.shift()

for (let i = 0; i < input.length; i += 2) {
  input[i].split("").sort().join("") == input[i + 1].split("").sort().join("")
    ? console.log(`${input[i]} & ${input[i + 1]} are anagrams.`)
    : console.log(`${input[i]} & ${input[i + 1]} are NOT anagrams.`)
}

// const readline = require("readline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
// let input

// rl.on("line", function (line) {
//   input = line
// }).on("close", function () {
//   console.log(input)
//   //   for (let i = 0; i < input.length; i += 2) {
//   //     input[i].split("").sort().join("") == input[i + 1].split("").sort().join("")
//   //       ? console.log(`${input[i]} & ${input[i + 1]} are anagrams.`)
//   //       : console.log(`${input[i]} & ${input[i + 1]} are NOT anagrams.`)
//   //   }
//   process.exit()
// })
