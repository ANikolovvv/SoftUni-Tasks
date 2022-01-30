function solve(input) {
  let result = [];
  let context = {
    add(com) {
      let [c, str] = com.split(" ");
      result.push(str);
    },
    remove(com) {
      let [c, str] = com.split(" ");

      while (result.includes(str)) {
        let index = result.indexOf(str);
        result.splice(index, 1);
      }
    },
    print() {
      console.log(`${result.join(",")}`);
    },
  };

  input.map((com) => {
    if (com.includes("add")) {
      context.add(com);
    } else if (com.includes("remove")) {
      context.remove(com);
    } else if (com.includes("print")) {
      context.print();
    }
  });
}
solve(["add hello", "add again", "remove hello", "add again", "print"]);
