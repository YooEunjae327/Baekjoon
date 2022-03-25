let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .split(/ |\n/g)

let si = parseInt(input[0]),
  bu = parseInt(input[1]),
  ch = parseInt(input[2]),
  time = parseInt(input[3]),
  a = Math.floor(time / 60),
  b

if (Math.floor(time % 60) + ch >= 60) {
  a++, (ch = Math.floor(time % 60) + ch - 60)
} else {
  ch += Math.floor(time % 60)
}

if (bu + a >= 60) {
  b = Math.floor((bu + a) / 60)
  si += b
  bu = Math.floor((bu + a) % 60)
} else {
  bu += a
}

if (si >= 24) si = Math.floor(si % 24)

console.log("%d %d %d", si, bu, ch)
