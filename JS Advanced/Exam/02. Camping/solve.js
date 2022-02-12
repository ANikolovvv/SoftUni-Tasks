class SummerCamp {
  constructor(organizer, location) {
    (this.organizer = organizer),
      (this.location = location),
      (this.priceForTheCamp = { child: 150, student: 300, collegian: 500 }),
      (this.listOfParticipants = []);
  }
  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error(`Unsuccessful registration at the camp.`);
    }
    let filter = this.listOfParticipants.some((p) => p.name === name);
    if (filter === true) {
      return `The ${name} is already registered at the camp.`;
    }

    if (this.priceForTheCamp[condition] > money) {
      return `The money is not enough to pay the stay at the camp.`;
    } else {
      this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
      return `The ${name} was successfully registered.`;
    }
  }
  unregisterParticipant(name) {
    let filter = this.listOfParticipants.some((p) => p.name === name);
    if (filter === false) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    let arr = [];
    for (const obj of this.listOfParticipants) {
      arr.push(obj.name);

      if (obj.name == name) {
        let index = this.listOfParticipants.indexOf(obj);
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
      }
    }
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    let arr = [];
    if (participant2 == undefined) {
      for (const obj of this.listOfParticipants) {
        arr.push(obj.name);
      }
      if (!arr.includes(participant1)) {
        throw new Error(`Invalid entered name/s.`);
      }
      let participant = this.listOfParticipants.find(
        (el) => el.name == participant1
      );
      participant.power += 20;
      return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    } else {
      arr = [];
      for (const obj of this.listOfParticipants) {
        arr.push(obj.name);
      }
      if (!arr.includes(participant1)) {
        throw new Error(`Invalid entered name/s.`);
      }
      if (!arr.includes(participant2)) {
        throw new Error(`Invalid entered name/s.`);
      }
      let first = this.listOfParticipants.find((el) => el.name == participant1);
      let second = this.listOfParticipants.find(
        (el) => el.name == participant2
      );

      if (first.condition != second.condition) {
        throw new Error(`Choose players with equal condition.`);
      }

      if (first.power > second.power) {
        first.wins += 1;
        return `The ${participant1} is winner in the game ${typeOfGame}.`;
      } else if (first.power < second.power) {
        second.wins += 1;
        return `The ${participant2} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    }
  }
  toString() {
    let result = [];
    result.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );

    let arr = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
    arr.map((x) =>
      result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
    );
    return result.join("\n");
  }
}

try {
  const summerCamp = new SummerCamp(
    "Jane Austen",
    "Pancharevo Sofia 1137, Bulgaria"
  );
  console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
  console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
  console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
  //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
  console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
  console.log(
    summerCamp.timeToPlay(
      "WaterBalloonFights",
      "Petar Petarson",
      "Dimitur Kostov"
    )
  );

  console.log(summerCamp.toString());
} catch (error) {
  console.log(error);
}
