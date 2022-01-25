function arrayModifier(arr) {
  let array = arr.slice(0);
  let numbers = array.shift().split(" ").map(Number);
  let end = array.pop();

  for (let command of array) {
    let [name, one, two] = command.split(" ");
    one = Number(one);
    two = Number(two);
    if (name === "swap") {
      swap(one, two);
    } else if (name === "multiply") {
      multiply(one, two);
    } else if (name === "decrease") {
      numbers = numbers.map((x) => x - 1);
    }
  }
  function swap(indexOne, indexTwo) {
    let first = numbers[indexOne];
    let second = numbers[indexTwo];
    numbers.splice(indexOne, 1, second);
    numbers.splice(indexTwo, 1, first);
  }

  function multiply(a, b) {
    let sum = numbers[a] * numbers[b];
    numbers.splice(a, 1, sum);
  }

  console.log(numbers.join(", "));
}
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
