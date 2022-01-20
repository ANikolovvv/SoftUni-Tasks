function solve(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    let store = {};
  
    for (const s of sorted) {
      let [name, price] = s.split(" : ");
      price = Number(price);
      let letter = name[0];
      if (!store.hasOwnProperty(letter)) {
        store[letter] = [{ name, price }];
      } else {
        store[letter].push({ name, price });
      }
    }
    
    for (const key in store) {
      console.log(key);
      for (const i of store[key]) {
          console.log(` ${i.name}: ${i.price}`)
      }
    }
  }
  solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ]);