function solve(arr) {
 
    let r=arr.reduce((k,v,i)=>{
      if (i % 2 === 0) {
          k[v] = Number(arr[i + 1])
      }
      return k
    },{})
    console.log(r);
  }
  //Construction Crew
  
  solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
  solve(["Potato", "93", "Skyr", 63, "Cucumber", 18, "Milk", 42]);