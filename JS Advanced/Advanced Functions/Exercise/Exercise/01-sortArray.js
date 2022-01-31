function solve(arr,com) {
    let result=com==='asc'? arr.sort((a,b)=>a-b):arr.sort((a,b)=>b-a)
    return result
}
solve([3, 1, 2, 10], 'asc')
