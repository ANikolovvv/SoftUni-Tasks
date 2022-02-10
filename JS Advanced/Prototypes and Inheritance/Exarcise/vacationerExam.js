class Vacationer {
  constructor(fullName, cardinfo = [1111, "", 111]) {
    this.fullName = fullName;
    this.addCreditCardInfo(cardinfo);
    this.idNumber = this.generateIDNumber();
    this.wishList = [];
  }
  get fullName() {
    return this._fullName;
  }
  set fullName(arr) {
    let regx = /^[A-Z][a-z]+$/;
    if (arr.length !== 3) {
      throw new Error(
        "Name must include first name, middle name and last name"
      );
    }
    arr.forEach((e) => {
      let match = regx.test(e);
      if (match === false) {
        throw new Error("Invalid full name");
      }
    });
    this._fullName = {
      firstName: arr[0],
      middleName: arr[1],
      lastName: arr[2],
    };
  }

  generateIDNumber() {
    const words = ["a", "e", "o", "i", "u"];
    let firstLeter = 231 * this.fullName.firstName.charCodeAt(0);
    let lastLetter = this.fullName.lastName.charAt(
      this.fullName.lastName.length - 1
    );
    let result = 0;
    if (words.includes(lastLetter)) {
      return (result =
        firstLeter + 139 * this.fullName.middleName.length + "8");
    } else {
      return (result =
        firstLeter + 139 * this.fullName.middleName.length + "7");
    }
  }
  addCreditCardInfo(arr) {
    if (arr.length < 3) {
      throw new Error("Missing credit card information");
    }
    if (typeof arr[0] !== "number" || typeof arr[2] !== "number") {
      throw new Error("Invalid credit card details");
    }

    this.creditCard = {
      cardNumber: arr[0],
      expirationDate: arr[1],
      securityNumber: arr[2],
    };
  }

  addDestinationToWishList(destination) {
    if (this.wishList.includes(destination)) {
      throw new Error("Destination already exists in wishlist");
    }

    this.wishList.push(`${destination}`);
    this.wishList.sort((a, b) => a.length - b.length);
  }
  getVacationerInfo () {
    return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}
ID Number: ${this.idNumber}
Wishlist:
${this.wishList.length > 0 ? this.wishList.join(', ') : 'empty'}
Credit Card:
Card Number: ${this.creditCard.cardNumber}
Expiration Date: ${this.creditCard.expirationDate}
Security Number: ${this.creditCard.securityNumber}`
}

}
//ID Number: 208398
// Initialize vacationers with 2 and 3 parameters

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());


