const library = require("../task");
//isOddOrEven
// assert.equal(expect,obj,'Wrong key');
const assert = require("chai").assert;

describe("Tests library", function () {
  describe("TODO …callcPriceBook(str,num)", function () {
    it("is not string ", function () {
      assert.throws(function () {
        library.calcPriceOfBook(1, 1);
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook([], 1);
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook({}, 1);
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook(undefined, 1);
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook(1, 1);
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook("");
      }, "Invalid input");
    });
    it("is not num", function () {
      // TODO: …
      // assert.equal(,"Invalid input")
      // assert.throws(library.calcPriceOfBook(1,0),'Invalid input')
      //assert.throws(library.calcPriceOfBook(1,0),'Invalid input')
      assert.throws(function () {
        library.calcPriceOfBook("", 1.1);
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook("", "");
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook("", {});
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook(1, undefined);
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook("", []);
      }, "Invalid input");
      assert.throws(function () {
        library.calcPriceOfBook(1);
      }, "Invalid input");
    });
    it("valid str valid year", function () {
      assert.equal(library.calcPriceOfBook("gd", 1981), "Price of gd is 20.00");
    });
    it("valid str valid year and 0,5 discound", function () {
      assert.equal(library.calcPriceOfBook("gd", 1980), "Price of gd is 10.00");
      assert.equal(library.calcPriceOfBook("gd", 1979), "Price of gd is 10.00");
    });
  });
  describe("findBook (booksArr, desiredBook)", function () {
    it("length===0 ", function () {
      assert.throws(function () {
        library.findBook([]);
      }, "No books currently available");
    });
    it("check if book includes in array", function () {
      assert.equal(
        library.findBook(["asen"], "vvv"),
        "The book you are looking for is not here!"
      );
    });
    it("we have a match", function () {
      assert.equal(
        library.findBook(["asen", "asss"], "asen"),
        "We found the book you want."
      );
    });
  });
  describe("arrangeTheBooks (countBooks) ", function () {
    it("not valid input", () => {
      assert.throws(function () {
        library.arrangeTheBooks("");
      }, "Invalid input");
      assert.throws(function () {
        library.arrangeTheBooks(-1);
      }, "Invalid input");
      assert.throws(function () {
        library.arrangeTheBooks({});
      }, "Invalid input");
      assert.throws(function () {
        library.arrangeTheBooks(undefined);
      }, "Invalid input");
      assert.throws(function () {
        library.arrangeTheBooks([]);
      }, "Invalid input");
      assert.throws(function () {
        library.arrangeTheBooks(1.1);
      }, "Invalid input");
    });
    it("valid input 40 ", () => {
      assert.equal(
        library.arrangeTheBooks(40),
        "Great job, the books are arranged."
      );
      assert.equal(
        library.arrangeTheBooks(39),
        "Great job, the books are arranged."
      );
    });
    it("valid input 41>40 ", () => {
      assert.equal(
        library.arrangeTheBooks(41),
        "Insufficient space, more shelves need to be purchased."
      );
      assert.equal(
        library.arrangeTheBooks(85),
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
  // TODO: …
});
