function solve(arr) {
    let array=arr.slice(0).map(Number);
    let concrete=0;
    let costs=0
    let arrLen=array.length;
    let days=0;
    let result=[];
   
     while(arrLen !==0){
       days++;
      
      for (let shift=0;shift< arrLen;shift++) {
        let num=array[shift]
        if(num<30){
          num+=1;
          array[shift]=num
          concrete+=195
        }else if(num>30){
          let index=array.indexOf(num);
          shift=index
          array.splice(index,1)
        }
      }
      if(concrete===0){
        break
      }
      result.push(concrete)
      arrLen=array.length;
      costs+=concrete
      concrete=0;
     }
     console.log(result.join(', '))
     console.log(`${costs *1900} pesos`)
    
  }
  solve([21, 25, 28]);
  solve([17])
  solve([17, 22, 17, 19, 17]);