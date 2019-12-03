const fs = require("fs");

const file = fs.readFileSync("./input.txt", "utf8");

const result = file
  .split(/\r?\n/)
  .map(Number)
  .reduce((acc, mass) => acc + Math.floor(mass / 3) - 2, 0);

console.log(result);
