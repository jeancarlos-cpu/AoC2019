const fs = require("fs");

const file = fs.readFileSync("./input.txt", "utf8");

const addFuel = fuel => {
  const moreFuel = Math.floor(fuel / 3) - 2;
  if (moreFuel <= 0) return 0;
  return moreFuel + addFuel(moreFuel);
};

const result = file
  .split(/\r?\n/)
  .map(Number)
  .reduce((acc, mass) => acc + addFuel(mass), 0);

console.log(result);
