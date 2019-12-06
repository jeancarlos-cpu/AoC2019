const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf8")
  .split(/\r?\n/)
  .map(e => e.split(/[()]/g));

const depth = (point, total = 0) => {
  const nextPoint = input.filter(e => e[1] === point)[0];
  total++;
  return nextPoint ? depth(nextPoint[0], total) : total;
};

result = input.map(e => depth(e[0])).reduce((acc, e) => acc + e);

console.log(result);
