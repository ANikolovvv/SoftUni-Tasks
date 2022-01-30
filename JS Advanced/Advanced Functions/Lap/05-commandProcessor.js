function solution() {
  let str = "";
  return {
    append(string) {
      str += string;
    },
    removeStart(index) {
      let remove = str.slice(index);
      str = remove;
    },
    removeEnd(index) {
      let length = str.length;
      let remove = str.slice(0, length - index);
      str = remove;
    },
    print() {
      console.log(str);
    },
  };
}

let firstZeroTest = solution();
//List Processor
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
