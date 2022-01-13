function solve(num) {
  let n = num.toString().split("").map(Number);
  let isNum = true;
  let arr = [];
  let first = n.shift();
  arr.push(first);
  for (const i of n) {
    if (!arr.includes(i)) {
      isNum = false;
    }
  }

  let sum = n.reduce((arr, x) => arr + x, 0);
  console.log(`${isNum}\n${sum + first}`);
}
solve(1234);

