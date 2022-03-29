const fs = require("fs")
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ")

let a = input[0].split("")

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
let numch = 0,
  numMax

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < 26; j++) {
    if (a[i] == so[j]) num[j]++
    else if (a[i] == da[j]) num[j]++
  }
}

for (let i = 0; i < 26; i++) {
  if (numch > 1) numMax = "?"
  else if (Math.max(...num) == num[i]) (numMax = da[i]), numch++
}

console.log(numMax)
