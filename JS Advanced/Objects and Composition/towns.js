function solve(arr) {
    let cordinaty = arr.shift();
    let arrey = [];
    let [t, lan, long] = cordinaty.split(" | ");
    let town = t.split("| ").join("").trim();
    let latitude = lan.trim();
    let longitude = long.split("|").join("").trim();
 
    for (const i of arr) {
      let [to, la, lon] = i.split(" | ");
      let tow = to.split("| ").join("").trim();
      let lati = la.trim();
      let longi = lon.split("|").join("").trim();
      let obj={}
      lati=Number(Number(lati).toFixed(2));
      longi=Number(Number(longi).toFixed(2));
      //console.log(lati)
      obj[town] = tow;
      obj[latitude] = lati;
      obj[longitude] = longi;
      
      arrey.push(obj)
    }
    let json=JSON.stringify(arrey)
      console.log(json)
  }
  solve([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ]);
  