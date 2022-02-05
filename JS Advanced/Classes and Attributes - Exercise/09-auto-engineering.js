function solve(arr) {
  let cars = new Map();

  arr.forEach((el) => {
    let [carName, carModel, producetCar] = el.split(" | ");
    producetCar = Number(producetCar);
    if (!cars.has(carName)) {
      cars.set(carName, []);
      let take = cars.get(carName);

      take.push({ carModel, producetCar });
      cars.set(carName, take);
      //console.log(cars)
    } else {
      let take = cars.get(carName);
      let see = take[0].carModel;

      if (see === carModel) {
        take[0].producetCar += producetCar;
      } else {
        let take = cars.get(carName);
        take.push({ carModel, producetCar });
        cars.set(carName, take);
      }

      // console.log(take[0])
    }
  });
  let a = Array.from(cars);
  for (const v of a) {
    console.log(`${v[0]}`);
    v[1].forEach((x) => {
      console.log(`###${x.carModel} -> ${x.producetCar}`);
    });
  }
}
solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
