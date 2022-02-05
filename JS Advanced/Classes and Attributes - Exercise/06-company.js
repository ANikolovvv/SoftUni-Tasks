class Company{
  constructor(){
      this.departments={}
  }
  addEmployee(name,salary,position,department){
      let arr=[name,salary,position,department];
      let check=arr.some(el=>el==='' || el===undefined || el===null)
      salary=Number(salary)
      if(check===true){
          throw new Error("Invalid input!")
      }
      if(salary <0){
          throw new Error("Invalid input!")
      }
      if(!this.departments.hasOwnProperty(department)){
          this.departments[department]={
              arr:[],
              av:salary
          };
          this.departments[department].arr.push({name,salary,position});

      }else{
          this.departments[department].arr.push({name,salary,position});
          let array=this.departments[department].arr
          let sum=array.reduce((acc,x)=>{
                return acc+=x.salary
          },0)
          this.departments[department].av=(sum/array.length)
      }
      return `New employee is hired. Name: ${name}. Position: ${position}`
  }
  bestDepartment(){
     let high=Object.keys(this.departments)
     .sort((a,b)=>b.av-a.av);

     let output=[`Best Department is: ${high[0]}`];
     const dep=this.departments[high[0]];

     output.push(`Average salary: ${dep.av.toFixed(2)}`);
     let sortEmp=dep.arr.sort((a,b)=>b.salary-a.salary||
     a.name.localeCompare(b.name));

     sortEmp.map(x=>output.push(`${x.name} ${x.salary} ${x.position}`))
     return output.join('\n')
     
  }

}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"))
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
