function solve(arr) {
    let obj = {};
    for (let city of arr) {
      //{townName} | {productName} | {productPrice}
      let [name, productName, price] = city.split(" | ");
      price = Number(price);
      if (!obj.hasOwnProperty(productName)) {
        obj[productName] = {
          price: price,
          name,
        };
      }
  
      if (obj[productName].price > price) {
          obj[productName].name=name;
        obj[productName].price = price;
      }
    }
    for (const s in obj) {
      console.log(`${s} -> ${obj[s].price} (${obj[s].name})`);
    }
  }
  solve(['Sofia City | Audi | 100000',
      'Sofia City | BMW | 100000',
      'Sofia City | Mitsubishi | 10000',
      'Sofia City | Mercedes | 10000',
      'Sofia City | NoOffenseToCarLovers | 0',
      'Mexico City | Audi | 1000',
      'Mexico City | BMW | 99999',
      'Mexico City | Mitsubishi | 10000',
      'New York City | Mitsubishi | 1000',
      'Washington City | Mercedes | 1000'
  ])