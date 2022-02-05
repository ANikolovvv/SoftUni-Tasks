///Auto-Engineering Company
function solve(arr) {
  let juice = new Map();
  let bottles = new Map();

  arr.forEach((element) => {
    let [name, juiceQuantity] = element.split(" => ");
    juiceQuantity = Number(juiceQuantity);
    if (!juice.has(name)) {
      juice.set(name, juiceQuantity);
    } else {
      let res = juice.get(name) + juiceQuantity;
      juice.set(name, res);
    }
    while (juice.get(name) >= 1000) {
      let res = juice.get(name) - 1000;
      juice.set(name, res);
      if (!bottles.has(name)) {
        bottles.set(name, 1);
      } else {
        let newBottles = bottles.get(name) + 1;
        bottles.set(name, newBottles);
      }
      //bottles.set(name,1);
    }
  });
  let array = Array.from(bottles);
  array.forEach((el) => {
    console.log(`${el[0]} => ${el[1]}`);
  });
}
solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
