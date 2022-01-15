function solve(arr) {
    let sort=arr.sort((a,b)=>a.localeCompare(b));
    let c=1
    for (const i of sort) {
        console.log(`${c}.${i}`);
        c++
    }
}
solve(["John", "Bob", "Christina", "Ema"])