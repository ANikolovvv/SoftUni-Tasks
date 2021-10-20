function solve(arr) {
  let array = arr.slice(0);
  let sequenceElement = array.shift().split(" ");
  let moves = 0;
  let result = sequenceElement.length;

  for (let i of array) {
    if (i === "end") {
      break;
    }
    let [indexOne, indexTwo] = i.split(" ");
    indexOne = Number(indexOne);
    indexTwo = Number(indexTwo);
    let first = sequenceElement[indexOne];
    let second = sequenceElement[indexTwo];
    if (result === 0) {
      break;
    }

    if (
      indexOne === indexTwo ||
      indexOne < 0 ||
      indexOne >= result ||
      indexTwo < 0 ||
      indexTwo >= result
    ) {
      let midle = result / 2;
      moves++;
      sequenceElement.splice(midle, 0, `-${moves}a`);
      sequenceElement.splice(midle, 0, `-${moves}a`);
      result = sequenceElement.length;
      console.log("Invalid input! Adding additional elements to the board");
      continue;
    }
    if (first === second) {
      moves++;
      sequenceElement.splice(indexOne, 1);

      if (indexTwo === 0) {
        sequenceElement.splice(indexTwo, 1);
      } else {
        sequenceElement.splice(indexTwo - 1, 1);
      }
      result = sequenceElement.length;

      console.log(`Congrats! You have found matching elements - ${first}!`);
    }
    if (first !== second) {
      moves++;
      console.log("Try again!");
    }
  }

  if (result === 0) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log(`Sorry you lose :(`);
    console.log(`${sequenceElement.join(" ")}`);
  }
}

solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
solve(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
