const fs = require("fs")
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n")

let [...arr] = input
let b = 0
let c = 0

for (let i = 0; i < input.length; i++) {
  b += parseInt(input[i])
  if (b == 100) break

  if (b + parseInt(input[i + 1]) > 100) {
    if (100 - b == b + parseInt(input[i + 1]) - 100) {
      b = b + parseInt(input[i + 1])
      break
    } else {
      100 - b - (b + parseInt(input[i + 1]) - 100) > 0
        ? (b = b + parseInt(input[i + 1]))
        : parseInt((b = b))
      break
    }
  }
}
console.log(b)

// 37 - 13

//     100 - b - (b + input[i + 1] - 100) > 0
//       ? parseInt((b = b + input[i + 1]))
//       : parseInt((b = b))
//   }

//   for (let i = 0; i < input.length; i++) {
//   b += Number(input[i])
//   console.log(b)
//   if (b == 100) break

//   if (b + input[i + 1] > 100) {
//     if (100 - b == b + input[i + 1] - 100) {
//       b = Number(b + input[i + 1])
//       break
//     }
//     100 - b - (b + input[i + 1] - 100) > 0
//       ? Number((b = b + input[i + 1]))
//       : Number((b = b))
//   }
// }
