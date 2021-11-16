function solve(arr) {
    let splitPattern = /[, ]+/g;
    let str = arr.split(splitPattern);
    let regDamage = /[+-]?\d+\.?\d*/g;
    let symbolsReg = /[\/*]/g;
    let healthReg = /[^0-9\.\+\-\/\*]/g;
    let demons = {};
  
    for (const demon of str) {
      let hp = 0;
      let demege = 0;
      if (demon.match(healthReg) !== null) {
        let health = demon.match(healthReg);
        hp = health.reduce((a, m) => {
          let h = Number(m.charCodeAt());
          return (a += h);
        }, 0);
      }
      if (demon.match(regDamage) !== null) {
        let dem = demon.match(regDamage);
        demege = dem.map(Number).reduce((a, m) => {
          return (a += m);
        }, 0);
      }
      if (demon.match(symbolsReg) !== null) {
        let multy = demon.match(symbolsReg);
        for (const w of multy) {
          if (w === "*") {
            demege *= 2;
          } else if (w === "/") {
            demege /= 2;
          }
        }
      }
      if (!demons.hasOwnProperty(demon)) {
        demons[demon] = {};
        demons[demon] = { hp, demege };
      }
    }
    let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, val] of sorted) {
      console.log(`${key} - ${val.hp} health, ${val.demege.toFixed(2)} damage`);
    }
  }
  solve("M3ph-0.5s-0.5t0.0**");
  //solve("M3ph1st0**");
  solve("Gos/ho");
  //solve("Azazel");
  solve("M3ph1st0**, Azazel");