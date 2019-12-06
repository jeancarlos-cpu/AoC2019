const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf8")
  .split(/\r?\n/)
  .map(e => e.split(/[()]/g));

const depth = (point, total = []) => {
  const nextPoint = input.filter(e => e[1] === point)[0];
  total.push(nextPoint);
  return nextPoint ? depth(nextPoint[0], total) : total;
};

const lowestCommonAncestor = (you2com, san2com) => {
  for (let i = 0; i < you2com.length - 1; i++) {
    for (let j = 0; j < san2com.length - 1; j++) {
      if (you2com[i][1] === san2com[j][1]) {
        return i + j;
      }
    }
  }
};

const you2com = depth("YOU");
const san2com = depth("SAN");
console.log(lowestCommonAncestor(you2com, san2com) - 2);
