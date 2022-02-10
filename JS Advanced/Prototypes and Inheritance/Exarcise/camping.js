class SummerCamp {
  constructor(organizer, location) {
    (this.organizer = organizer),
      (this.location = location),
      (this.priceForTheCamp = { child: 150, student: 300, collegian: 500 }),
      (this.listOfParticipants = []);
  }
  registerParticipant(name, condition, money) {
    let isHaveReg = false;
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }
    this.listOfParticipants.forEach((p) => {
      if (p.name === name) {
        isHaveReg = true;
      }
    });
    if (isHaveReg === true) {
      return `The ${name} is already registered at the camp.`;
    }

    let price = this.priceForTheCamp[condition];
    if (money < price) {
      
      return `The money is not enough to pay the stay at the camp.`;
    } else {
      this.listOfParticipants.push({name,condition, power: 100, wins: 0 });
      return `The ${name} was successfully registered.`;
    }
  }
  unregisterParticipant(name) {
    let isHaveReg = false;
    let index=0
    this.listOfParticipants.forEach((p) => {
      if (p.name === name) {
        isHaveReg = true;
        index = this.listOfParticipants.indexOf(p);
       
      }
    });
    if (isHaveReg === true) {
        this.listOfParticipants.splice(index, 1);
      return `The ${name} removed successfully.`;
    } 
    if(isHaveReg===false) {
      throw new Error(`The ${name} is not registered in the camp.`);//throw
    }
  }
  timeToPlay(typeOfGame, ...names) {
    let b = false;
    let isHav = false;
    let twoDont = false;
    let in1=0;
    let in2=0

    if (typeOfGame === 'WaterBalloonFights') {
      this.listOfParticipants.forEach((p) => {
        if (p.name === names[0]) {
            in1=this.listOfParticipants.indexOf(p)
            isHav = true;
            
        }
        if (p.name === names[1]) {
          twoDont = true;
          in2=this.listOfParticipants.indexOf(p)
        
        }

      });
    
      let one=this.listOfParticipants[in1];
      let two=this.listOfParticipants[in2];
      if ((isHav === false || twoDont === false)) {
        throw new Error(`Invalid entered ${names.join(' ')}.`);
      }
      if (one.condition !==two.condition) {
        throw new Error(`Choose players with equal condition.`);//tr
      }

      if(one.power>two.power){
        this.listOfParticipants[in1].wins++;
        return `The ${one.name} is winner in the game ${typeOfGame}.`

      }
       if(two.power>one.power){
        this.listOfParticipants[in2].wins++;
        console.log(two.power)
        console.log(one.power)
        return `The ${two.name} is winner in the game ${typeOfGame}.`
      }
      if(two.power===one.power){
        return`There is no winner.`

      }
    }
    if (typeOfGame === "Battleship") {
      let str = "";
      this.listOfParticipants.forEach((p) => {
        if (p.name === names[0]) {
          b = true;
          p.power += 20;
          str = `The ${p.name} successfully completed the game ${typeOfGame}.`;
        }
      });
      if (b === true) {

        return str;
      }
    }
  }
  toString (){
      let a=`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
      let b=this.listOfParticipants.sort((a,b)=>b.wins-a.wins)
      let ss=[]
      for (const k of b) {
          let q=`${k.name} - ${k.condition} - ${k.power} - ${k.wins}`
          ss.push(q)
      }
      return `${a}\n${ss.join('\n')}`
  }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());










