const PaymentPackage = require("../12payment");
//isOddOrEven
// assert.equal(expect,obj,'Wrong key');
const assert = require("chai").assert;
describe("PaymentPackage", function () {
  describe("Constructor", () => {
    it("Name should be difren from string", function () {
      assert.throws(function () {
        new PaymentPackage("", 1);
      }, "Name must be a non-empty string");
      assert.throws(function () {
        new PaymentPackage([], 1);
      }, "Name must be a non-empty string");
      assert.throws(function () {
        new PaymentPackage(undefined, 1);
      }, "Name must be a non-empty string");
      assert.throws(function () {
        new PaymentPackage(1, 1);
      }, "Name must be a non-empty string");
    });
    it("Value must be not  a number", () => {
      assert.throws(function () {
        new PaymentPackage("a", "");
      }, "Value must be a non-negative number");
      assert.throws(function () {
        new PaymentPackage("a", []);
      }, "Value must be a non-negative number");
      assert.throws(function () {
        new PaymentPackage("a", undefined);
      }, "Value must be a non-negative number");
      assert.throws(function () {
        new PaymentPackage("a", {});
      }, "Value must be a non-negative number");
      assert.throws(function () {
        new PaymentPackage("a", -1);
      }, "Value must be a non-negative number");
    });
    it("valid num and string", () => {
      let sb = new PaymentPackage("a", 1);
      assert.equal(sb._active, true, 'ac');
      assert.equal(sb.toString(), new PaymentPackage("a", 1), "error");
      assert.equal(sb._name, 'a', '1');
      assert.equal(sb._value, 1, '3');
      assert.equal(sb._VAT, 20, '4');
    });
    it('Set value to null', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.doesNotThrow(() => { instance.value = 0 })
});
  });
  describe("Vat", () => {
    it("Vat must be a no negative number", () => {
      assert.throw(() => {
        new PaymentPackage("a", 1).VAT = "";
      }, "VAT must be a non-negative number");
      assert.throw(() => {
        new PaymentPackage("a", 1).VAT = -1;
      }, "VAT must be a non-negative number");
      assert.throw(() => {
        new PaymentPackage("a", 1).VAT = [];
      }, "VAT must be a non-negative number");
      assert.throw(() => {
        new PaymentPackage("a", 1).VAT = null;
      }, "VAT must be a non-negative number");
      assert.throw(() => {
        new PaymentPackage("a", 1).VAT = undefined;
      }, "VAT must be a non-negative number");
    });
    it("valid input", () => {
      assert.equal(new PaymentPackage("a", 1).VAT, 20);
    });
  });
  describe("Active", () => {
    it("active=false", () => {
      assert.throw(() => {
        new PaymentPackage("a", 1).active = "";
      }, "Active status must be a boolean");

      assert.throw(() => {
        new PaymentPackage("a", 1).active = [];
      }, "Active status must be a boolean");
      assert.throw(() => {
        new PaymentPackage("a", 1).active = 1;
      }, "Active status must be a boolean");
      assert.throw(() => {
        new PaymentPackage("a", 1).active = null;
      }, "Active status must be a boolean");
      assert.throw(() => {
        new PaymentPackage("a", 1).active = undefined;
      }, "Active status must be a boolean");
    });
    it("active===true", () => {
      assert.equal(new PaymentPackage("a", 1).active, true);
    });
  });
  describe("toString method", () => {
    it("output", () => {
      let cl = new PaymentPackage('a', 1);
      let output ="Package: a\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2"
      assert.equal(cl.toString(), output);
      
    });
    it("output active=false", () => {

        let cl = new PaymentPackage('a', 1);
        cl.active=false
        let output ="Package: a (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2"
        assert.equal(cl.toString(), output);
        
      });
  });

  // TODO: …
});
