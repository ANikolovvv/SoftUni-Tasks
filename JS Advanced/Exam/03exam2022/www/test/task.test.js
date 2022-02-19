let flowerShop = require("../task");
let { assert, expect } = require("chai");
// assert.equal(testNumbers.sumNumbers(1.1, 1), 2.1);
//assert.typeOf(entity.name, 'string', 'we have an string');
// //assert.throws(function () {
//     library.calcPriceOfBook(1, 1);
// }, "Invalid input");
// expect(result[2]).to.be.an('undefined');
describe("flower", () => {
  describe("calcPriceOfFlowers(flower, price, quantity)", () => {
    it("not valid", () => {
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers();
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("a");
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("a", "b");
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("a", "b");
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("a", "b", 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("a", {}, 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers([], "b", 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers({}, "b", 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers(1, 1, 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers(1, 1.1, 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers(1, 1, 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers(undefined, 1, 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers(undefined, 1, 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("", [], 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("b", 1, "s");
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("r", 1, []);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("w", 1, {});
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.calcPriceOfFlowers("s", 1, undefined);
      }, "Invalid input");
    });
    it("valid", () => {
      //assert.equal(testNumbers.sumNumbers(1.1, 1), 2.1);
      assert.equal(
        flowerShop.calcPriceOfFlowers("a", 1, 1),
        `You need $1.00 to buy a!`
      );
      assert.equal(
        flowerShop.calcPriceOfFlowers("a", 1, 1, 1),
        `You need $1.00 to buy a!`
      );
      assert.equal(
        flowerShop.calcPriceOfFlowers("a", -1, 1),
        `You need $-1.00 to buy a!`
      );
      assert.equal(
        flowerShop.calcPriceOfFlowers("a", 15, 15),
        `You need $225.00 to buy a!`
      );
      assert.equal(
        flowerShop.calcPriceOfFlowers("a", 15, 0),
        `You need $0.00 to buy a!`
      );
    });
  });
  describe("checkFlowersAvailable(flower, gardenArr)", () => {
    it("arr", () => {
      //assert.include([1,2,3], 2, 'array contains value');
      let arr = ["Lily", "Orchid"];
      assert.equal(
        flowerShop.checkFlowersAvailable("Rose", ["Lily"]),
        `The Rose are sold! You need to purchase more!`
      );
      assert.equal(
        flowerShop.checkFlowersAvailable("Rose", []),
        `The Rose are sold! You need to purchase more!`
      );
      assert.equal(
        flowerShop.checkFlowersAvailable("Rose", arr),
        `The Rose are sold! You need to purchase more!`
      );
    });
    it("val", () => {
      let arr = ["Rose", "Lily", "Orchid"];
      assert.equal(
        flowerShop.checkFlowersAvailable("Lily", ["Lily"]),
        `The Lily are available!`
      );
      assert.equal(
        flowerShop.checkFlowersAvailable("Lily", arr),
        `The Lily are available!`
      );
    });
  });
  describe("sel", () => {
    it("sellFlowers(gardenArr, space)", () => {
        let arr = ["Rose", "Lily", "Orchid"];
      assert.throws(function () {
        flowerShop.sellFlowers("Rose");
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers();
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers("a", 1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers([],1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers(arr,3);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers(['Rose'],'');
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers(['Rose'],[]);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers(['Rose'],{});
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers(['Rose'],undefined);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers(['Rose'],1.1);
      }, "Invalid input");
      assert.throws(function () {
        flowerShop.sellFlowers(['Rose'],-1);
      }, "Invalid input");
    });
    it('vsapf',()=>{
        let arr = ["Rose", "Lily", "Orchid"];
        assert.equal(
            flowerShop.sellFlowers(arr, 1),
            `Rose / Orchid`
        );
        assert.equal(
            flowerShop.sellFlowers(arr, 2),
            `Rose / Lily`
        );
        assert.equal(
            flowerShop.sellFlowers(arr, 0),
            `Lily / Orchid`
        );
    })
 
  });
});
