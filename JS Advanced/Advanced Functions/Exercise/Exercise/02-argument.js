function solve(...a) {
  let result = {};
  a.map((x) => {
    console.log(`${typeof x}: ${x}`);
    if (!result.hasOwnProperty(typeof x)) {
      result[typeof x] = 1;
    } else {
      result[typeof x] += 1;
    }
  });
  let arr = Object.entries(result).sort((a, b) => b[1] - a[1]);

  arr.forEach((x) => {
    console.log(`${x[0]} = ${x[1]}`);
  });
}
solve("cat", 42, 23, function () {
  console.log("Hello world!");
});
