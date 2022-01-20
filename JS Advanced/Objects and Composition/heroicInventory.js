function solve(arr) {
    let hero=[];
 
    for (let h of arr) {
        let[name,level,items]=h.split(' / ');
        level=Number(level);
        let a=items ? items.split(', '):[];
        //console.log(a)
        hero.push( {
            name:name,
            level:level,
            items:a
        })
    }
    return JSON.stringify(hero)
   
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])