const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().split(" ")

let a = [input[0], input[1], input[2]]

console.log(Math.ceil((input[2] - input[0]) / (input[0] - input[1])) + 1)

// 6 5 = 1
// 4

// 5 : 2 1
// 2 1 : 1
// 3 2 : 2
// 4 3 : 3
// 5 4 : 4

// 5 :

// 6 : 5 1
// 5 4 : 1
// 9 8 : 2

// 5 : 4 2
// 4 2 : 1
// 6 4 : 2

// 10 : 4 2
// 4 2 : 1
// 6 4 : 2
// 8 6 : 3
// 10 8 : 4
