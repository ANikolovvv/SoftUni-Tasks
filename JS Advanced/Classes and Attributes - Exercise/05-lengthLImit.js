class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  decrease(index) {
    let total = this.innerLength - index;
    if (total < 0) {
      this.innerLength = 0;
    }else{
        this.innerLength = total;
    }

  }
  increase(index) {
    this.innerLength = this.innerLength + index;
  }
  toString() {
    this.innerString;
    let lengthStr = this.innerString.length;
    if (lengthStr > this.innerLength && this.innerLength > 0) {
      let s = this.innerString.slice(-this.innerLength);
      let rep = this.innerString.replace(s, "...");
      this.innerString = rep;
    } else if (this.innerLength === 0) {
      this.innerString = "...";
    }
    return this.innerString;
  }
}

let test = new Stringer("Test", 5);
//console.log(test.toString()); // Test

//test.decrease(3);
//console.log(test.toString()); // Te...

//test.decrease(5);
//console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
