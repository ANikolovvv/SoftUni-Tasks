function solve(num,a,b,c,d,e){
    num=Number(num);
    let arr=[a,b,c,d,e];
    arr.forEach(c=>{
        switch(c){
            case 'chop':num/=2
            console.log(num)
            break;
            case "dice": num=Math.sqrt(num)
            console.log(num);
            break;
            case 'spice':num+=1;
            console.log(num);
            break;
            case "bake":num*=3;
            console.log(num);
            break;
            case "fillet":num*=0.80;
            console.log(num)
            break

        }
    })

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
