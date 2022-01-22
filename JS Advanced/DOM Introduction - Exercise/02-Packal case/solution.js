function solve() {
  
    //TODO...
    let text = document.getElementById("text");
    let cases = document.getElementById("naming-convention");
    const result = document.getElementById("result");
    text.value=text.value.toLowerCase();
    if (cases.value === "Pascal Case") {
      let arr = text.value.split(' ');
      let a = [];
     // console.log(arr);
      arr.forEach((w) => {
        let r = w[0].toUpperCase();
        let word = w.replace(w[0], r);
       // console.log(word);
        a.push(word);
      });
      result.textContent = a.join("");
    } else if (cases.value === "Camel Case") {
      let arr = text.value.split(" ");
      let first = arr.shift();
      let a = [];
      a.push(first);
      arr.forEach((w) => {
        let r = w[0].toUpperCase();
        let word = w.replace(w[0], r);
        a.push(word);
      });
      result.textContent = a.join("");
    } else {
      result.textContent = "Error!";
    }
  }