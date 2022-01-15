function solve(arr) {
    let s=arr.sort((a,b)=>a.length-b.length || a.localeCompare(b))
    console.log(s.join(`\n`))
}
solve(['test', 
'Deny', 
'omen', 
'Default'])