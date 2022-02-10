function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
    Object.defineProperty(this, "fullName", {
      get: function () {
        return `${this.firstName} ${this.lastName}`;
      },
      set: function (fullName) {
        let reg = /(?<first>\w+) (?<last>\w+)/;
        let matches = fullName.match(reg);
        if (matches) {
          //this.firstName = matches.groups.first;
          //this.lastName = matches.groups.last;
          let [first,last]=fullName.split(' ')
          this.firstName=first;
          this.lastName=last
        }
      },
    });
  }
  let person = new Person("Peter", "Ivanov");
  console.log(person.fullName); //Peter Ivanov
  person.firstName = "George";
  console.log(person.fullName); //George Ivanov
  person.lastName = "Peterson";
  console.log(person.fullName); //George Peterson
  person.fullName = "Nikola Tesla";
  console.log(person.firstName); //Nikola
  console.log(person.lastName); //Tesla

let second={
   age:1,
   color:'red'
}
Object.setPrototypeOf(person,second)
console.log(person.color)

class Demo{
    constructor(width, height, ) {
        super(units);
        this.width = width;
        this.height = height;
    }
    get area() {
        //this.width = this.metricConversion(this._width);
        //this.height = this.metricConversion(this._height);
        return this.width * this.height;
    }
}

let c=new Demo(10,1);
console.log(c.area)
c=new Demo(2);
console.log(c.area)


