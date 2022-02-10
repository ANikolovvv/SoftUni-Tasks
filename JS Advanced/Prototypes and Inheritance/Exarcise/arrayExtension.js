(function () {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    let arr = [];
     for (let i = n; i < this.length; i++) {
         arr.push(this[i]);
         
     }
    return arr;
  };
  Array.prototype.take = function (n) {
    let arr = [];
     for (let i = 0; i <n; i++) {
         arr.push(this[i]);
         
     }
    return arr;
    return result;
  };
  Array.prototype.sum = function () {
    let a = this.reduce((acc, x) => acc + x, 0);
    return a;
  };
  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();
let mayArr = [1, 2, 3];
console.log(mayArr.last());
console.log(mayArr.skip(2));
console.log(mayArr.take(3));
console.log(mayArr.sum());
console.log(mayArr.average());
