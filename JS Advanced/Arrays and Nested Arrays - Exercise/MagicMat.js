function solve(arr) {
    let sum = arr.map((x) => x.reduce((acc, a) => acc + a, 0));
  
    let matrix = false;
    if (sum[0] === sum[1] && sum[1] === sum[2]) {
      matrix = true;
    }
    return matrix
  }