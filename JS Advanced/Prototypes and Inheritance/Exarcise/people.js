function solution() {
  class Employee {
    constructor(name, age, task) {
      if (this.constructor === Employee) {
        throw new Error("Error");
      }
      (this.name = name),
        (this.age = age),
        (this.salary = 0),
        (this.task = task),
        (this._currenTask = 0);
    }
    work() {
      let task = this.task[this._currenTask].replace("{name}", this.name);
      this._currenTask = (this._currenTask + 1) % this.task.length;
      console.log(task);
    }
    _calcSalaryMen() {
      return this.salary;
    }
    collectSalary() {
      console.log(`${this.name} received ${this._calcSalaryMen()} this month.`);
    }
  }
  class Junior extends Employee {
    constructor(name, age) {
      super(name, age, [`{name} is working on a simple task.`]);
    }
  }
  class Senior extends Employee {
    constructor(name, age) {
      super(name, age, [
        `{name} is working on a complicated task.`,
        `{name} is taking time off work.`,
        `{name} is supervising junior workers.`,
      ]);
    }
  }
  class Manager extends Employee {
    constructor(name, age) {
      super(name, age, [
        `{name} scheduled a meeting.`,
        `{name} is preparing a quarterly report.`,
      ]);
      this.dividend = 0;
    }
    _calcSalaryMen() {
      return this.salary + this.dividend;
    }
  }
  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}
const classes = solution();
const junior = new classes.Junior("Ivan", 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new classes.Senior("Alex", 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
