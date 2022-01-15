function names(arr, n) {
    for (let i = 0; i < n; i++) {
      let pop = arr.pop();
  
      arr.unshift(pop);
    }
    console.log(arr.join(" "));
  }
  names(["Banana", "Orange", "Coconut", "Apple"], 15);