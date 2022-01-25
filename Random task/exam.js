function exam(arr) {
    let pirate = {};

    while (arr[0] !== "Sail") {
      let [town, population, gold] = arr[0].split("||");
      population = Number(population);
      gold = Number(gold);
      if (!pirate.hasOwnProperty(town)) {
        pirate[town] = {
          populatio: population,
          money: gold,
        };
      } else {
        pirate[town].populatio += population;
        pirate[town].money += gold;
      }
      arr.shift();
    }
    arr.shift();

    while (arr[0] !== "End") {
      let [command, town, people, gold] = arr[0].split("=>");
      people = Number(people);
      gold = Number(gold);
      if (command === "Plunder") {
        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );
        plunder(town, people, gold);
      } else if (command === "Prosper") {
        prosper(town, people);
      }
      arr.shift();
    }
  
    function plunder(town, people, gold) {
      pirate[town].populatio -= people;
      pirate[town].money -= gold;
      if (pirate[town].populatio === 0 || pirate[town].money === 0) {
        delete pirate[town];
        console.log(`${town} has been wiped off the map!`);
      }
    }
    
    function prosper(town, gold) {
      if (gold < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        pirate[town].money += gold;
  
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${pirate[town].money} gold.`
        );
      }
    }
    let chek = Object.keys(pirate);
    let length = chek.length;
    let sorted = Object.entries(pirate).sort(
      (a, b) => b[1].money - a[1].money || a[0].localeCompare(b[0])
    );
    if (length > 0) {
      console.log(
        `Ahoy, Captain! There are ${length} wealthy settlements to go to:`
      );
      for (const town of sorted) {
        console.log(
          `${town[0]} -> Population: ${town[1].populatio} citizens, Gold: ${town[1].money} kg`
        );
      }
    } else {
      console.log(
        "Ahoy, Captain! All targets have been plundered and destroyed!"
      );
    }
  }
  
  exam([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End",
  ]);
  