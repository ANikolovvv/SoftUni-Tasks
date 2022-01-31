function add(num) {
    let sum=0
    function sumi(number) {
        sum+=number
        return sumi
    }
    sumi.toString=()=>{
        return (sum);
    }
    return sumi(num)
}
let a=add(1)(6)(-3)
console.log(a.toString())
//Simple Calculator