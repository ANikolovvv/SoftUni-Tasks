function solve(input) {
    const data = {}
  
    const commands={
        create:(n,inher,n2)=>
        (data[n]=inher ? Object.create(data[n2]):{}),
        set:(n,k,v)=>(data[n][k]=v),
        print:n=>{
            let result=[];
            for (const key in data[n]) {
                result.push(`${key}:${data[n][key]}`)
            }
            console.log(result.join(", "))
        }
    };

    input.map(x=>{
        const [c, n, k, v] = x.split(" ")
        commands[c](n, k, v)
        
    })
   
}

solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
