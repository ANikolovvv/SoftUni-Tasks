function solve(arr) {
    let isEqual = false;
  
    for (let i = 0; i < arr.length; i++) {
      let right = 0;
      let left = 0;
  
      for (let j = i + 1; j < arr.length; j ++) {
        right += arr[j];
      }
      for (let l = 0; l < i; l++) {
        left += arr[l];
      }
      if (right === left) {
        isEqual = true;
        console.log(i);
      }
      
    }
    if (!isEqual) {
      console.log("no");
    }
  }
 
  solve([1])
  solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])