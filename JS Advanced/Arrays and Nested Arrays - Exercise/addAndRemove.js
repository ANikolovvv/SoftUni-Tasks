function solve(arr) {
    let n=1;
    let a=[];
  
    for (const i of arr) {
       
        if(i==='add'){
            a.push(n)
            n+=1;
        }else if (i==='remove'){
           a.pop()
           n+=1
         
        }
    }
     if(a.length===0){
         console.log('Empty')
     }else{
         console.log(a.join('\n'))
     }
}
solve([ 
'remove'
])