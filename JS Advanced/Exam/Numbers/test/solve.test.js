let testNumbers = require("../solve");
let { assert } = require("chai");

// assert.throws(function(){
//     rep.add(obj);
// },`Property name is missing from the entity!`);

// assert.equal(rep.add(entity),0)

describe("Numbers", () => {
  describe("sumNUmbers", () => {
    it(" not a num", () => {
      assert.equal(testNumbers.sumNumbers(1), undefined);
      assert.equal(testNumbers.sumNumbers(""), undefined);
      assert.equal(testNumbers.sumNumbers([]), undefined);
      assert.equal(testNumbers.sumNumbers(undefined), undefined);
      assert.equal(testNumbers.sumNumbers({}), undefined);
      assert.equal(testNumbers.sumNumbers(1, ""), undefined);
      assert.equal(testNumbers.sumNumbers(1, []), undefined);
      assert.equal(testNumbers.sumNumbers(1, {}), undefined);
      assert.equal(testNumbers.sumNumbers(), undefined);
    });
    it("is a num", () => {
      assert.equal(testNumbers.sumNumbers(1.1, 1), 2.1);
      assert.equal(testNumbers.sumNumbers(-1, 1), 0.0);
      assert.equal(testNumbers.sumNumbers(3, 1), 4.0);
      assert.equal(testNumbers.sumNumbers(0, 1, 1), 1.0);
    });
  });
  describe("numberChecker(input)", () => {
    it("input", () => {
      assert.throws(function () {
        testNumbers.numberChecker();
      }, `The input is not a number!`);
      assert.throws(function () {
        testNumbers.numberChecker(undefined);
      }, `The input is not a number!`);
      assert.throws(function () {
        testNumbers.numberChecker({});
      }, `The input is not a number!`);
    });
    it("input even", () => {
      assert.equal(testNumbers.numberChecker(""), "The number is even!");
      assert.equal(testNumbers.numberChecker([]), "The number is even!");
      assert.equal(testNumbers.numberChecker(0), "The number is even!");
    });
    it("input odd", () => {
      assert.equal(testNumbers.numberChecker(-1), "The number is odd!");
      assert.equal(testNumbers.numberChecker(1,1), "The number is odd!");
      assert.equal(testNumbers.numberChecker(1.1), "The number is odd!");
      assert.equal(testNumbers.numberChecker(1,1,1,1), "The number is odd!");
    });
  });
  describe('averageSumArray(arr)',()=>{
      it('arr',()=>{
        assert.equal(testNumbers.averageSumArray([1,2]),1.5);
        assert.equal(testNumbers.averageSumArray([1,1.1]),1.05);
        assert.equal(testNumbers.averageSumArray([1,-5]),-2);
        assert.equal(testNumbers.averageSumArray([1]),1);
      })
  })
});
