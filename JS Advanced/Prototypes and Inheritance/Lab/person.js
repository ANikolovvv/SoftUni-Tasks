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
