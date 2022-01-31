function solution() {
  const ingreds = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  const recipes = {
    apple: recipeData(0, 1, 0, 2),
    lemonade: recipeData(0, 10, 0, 20),
    burger: recipeData(0, 5, 7, 3),
    eggs: recipeData(5, 0, 1, 1),
    turkey: recipeData(10, 10, 10, 10),
  };

  function recipeData(protein, carbohydrate, fat, flavour) {
    return {
      protein,
      carbohydrate,
      fat,
      flavour,
    };
  }
  function restock(ingr, x) {
    ingreds[ingr] += x;
    return "Success";
  }
  function prepare(obj, num) {
    let arr = [];
    let store = Object.entries(obj);
    store.forEach(([k, v]) => {
      v *= Number(num);
      arr.push({ name: k, num: v });
    });
    for (const x of arr) {
      if (ingreds[x.name] - x.num < 0) {
        return `Error: not enough ${x.name} in stock`;
      }
      ingreds[x.name]-=x.num
    }
    return "Success"
  }
  function report() {
    return Object.entries(ingreds)
    .map(([key, value]) => `${key}=${value}`)
    .join(" ");
  }
  const type = {
    restock,
    prepare: (x, v) => prepare(recipes[x], v),
    report
  };
  return function (s) {
    let [method, key, num] = s.split(" ");
    num = Number(num);
    console.log(type[method])
    return type[method](key, num);
  };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("report"))
