function solve(arr) {
    return arr.reduce((a, v) => {
        //console.log(a)
        if (v >= (a[a.length - 1] || arr[0])) {
            a.push(v)
        }
        return a
    }, [])
}
 let r=solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])