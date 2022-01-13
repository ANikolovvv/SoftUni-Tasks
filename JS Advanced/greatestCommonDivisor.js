function solve(num,n){
     let result=1;
     for (let i = 2; i < 9; i++) {
         if(num%i===0 && n %i===0){
             result=i
         }
         
     }
     console.log(result)
}
solve(15, 5)
