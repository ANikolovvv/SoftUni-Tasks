class Restaurant {
  constructor(budgetMoney) {
    (this.budgetMoney = budgetMoney),
      (this.menu = {}),
      (this.stockProducts = {}),
      (this.history = []);
  }
  loadProducts(arr) {
    //"{productName} {productQuantity} {productTotalPrice}"
    arr.forEach((e) => {
      let [productName, productQuantity, productTotalPrice] = e.split(" ");
      productQuantity = Number(productQuantity);
      productTotalPrice = Number(productTotalPrice);

      if (productTotalPrice <= this.budgetMoney) {
        if (!this.stockProducts.hasOwnProperty(productName)) {
          this.stockProducts[productName] = productQuantity;
          this.budgetMoney -= productTotalPrice;
          this.history.push(
            `Successfully loaded ${productQuantity} ${productName}`
          );
        } else {
          this.stockProducts[productName] += productQuantity;
          this.budgetMoney -= productTotalPrice;
          this.history.push(
            `Successfully loaded ${productQuantity} ${productName}`
          );
        }
      } else {
        this.history.push(
          `There was not enough money to load ${productQuantity} ${productName}`
        );
      }
    });
    return this.history.join("\n");
  }
  addToMenu(meal, neededProducts, price) {
    if (!this.menu.hasOwnProperty(meal)) {
      this.menu[meal] = { price, arr: [] };
      for (let product of neededProducts) {
        let [productName, productQuantity] = product.split(" ");
        productQuantity = Number(productQuantity);
        price = Number(price);

        this.menu[meal].arr.push({ productName, productQuantity });
      }
    } else {
      return `The ${meal} is already in the our menu, try something different.`;
    }
    let meals = Object.keys(this.menu);
    if (meals.length === 1) {
      return `Great idea! Now with the ${meals[0]} we have 1 meal in the menu, other ideas?`;
    } else if (meals.length === 0 || meals.length > 1) {
      return `Great idea! Now with the ${meals[meals.length - 1]} we have ${
        meals.length
      } meals in the menu, other ideas?`;
    }
  }
  showTheMenu() {
    let keys = Object.entries(this.menu);
    if (keys.length === 0) {
      return `Our menu is not ready yet, please come later...`;
    }
    let a = [];
    for (const [x, v] of keys) {
      a.push(`${x} - $ ${v.price}`);
    }
    return a.join("\n");
  }
  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    } else {
      let pro = [];
      let a = this.menu[meal].arr;
      for (let x of a) {
        if (this.stockProducts.hasOwnProperty(x.productName)) {
          pro.push(x);
        }
      }

      if (pro.length !== this.menu[meal].arr.length) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      } else {
        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
      }
    }
  }
}
try {
  let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

} catch (e) {
  console.log(e);
}
