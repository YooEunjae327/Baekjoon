const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el))
  console.log(input[0] / input[1])
}).on("close", function () {
  process.exit()
})
