(function () {
  String.prototype.ensureStart = function (my) {
    let start = this.startsWith(my);
    if (start === true) {
      return this.toString();
    }
    return `${my}${this}`;
  };
  String.prototype.ensureEnd = function (s) {
    let end = this.endsWith(s);
    if (end === true) {
      return this.toString();
    }
    return `${this}${s}`;
  };
  String.prototype.isEmpty = function () {
    return this.toString() === "";
  };
  String.prototype.truncate = function (n) {
    let str = "";

    if (this.length <= n) {
      return this.toString();
    }
    if (this.includes(" ")) {
      let words = this.split(" ");
       while (words.join(" ").length + 3 > n){
        words.pop();
       };
      str = `${words.join(" ")}...`;
      return str;
    }
    if (n > 3) {
      let string = `${this.slice(0, n - 3)}...`;
      return string;
    }
    return ".".repeat(n);
  };
  String.format = function (str, ...params) {
    let reg = /{(\d+)}/g;
    let replace = str.replace(reg, (match, group1) => {
      let index = Number(group1);
      if (params[index] !== undefined) {
        return params[index];
      }
      return match;
    });
    return replace;
  };
})();
let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
console.log(str);
str = str.truncate(16);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format("The {0} {1} fox", "quick", "brown");
str = String.format("jumps {0} {1}", "dog");
console.log(str);
