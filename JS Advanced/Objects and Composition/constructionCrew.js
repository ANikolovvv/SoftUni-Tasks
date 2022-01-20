function solve(o) {
    if(o.dizziness===true){
        let r=o.weight *0.1 ;
        o.levelOfHydrated=r;
        o.dizziness=false;
    }
  return o
}
solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })