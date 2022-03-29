const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n")

let a = []
let b = 0

for (let i = 0; i < input.length; i++) {
  a.push(input[i])
}

let so = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

let da = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

let num = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]
let v = 0

for (let i = 0; i < a.length - 1; i++) {
  for (let j = 0; j < a[i].length; j++) {
    for (let n = 0; n < 26; n++) {
      if (a[i][j] == so[n]) num[n]++
      else if (a[i][j] == da[n]) num[n]++
    }
  }

  for (let m = 0; m < 26; m++) {
    if (num[m] >= 1) {
      num[m] = 0
      v++
    }
  }
  console.log(v)
  v = 0
}
