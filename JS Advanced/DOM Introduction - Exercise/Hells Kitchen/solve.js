function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);
  
    function onClick() {
      //   TODO:
      const textarea = document.querySelector("textarea").value;
      let restaurant = {};
      let arr = JSON.parse(textarea);
  
      for (const r of arr) {
        let [res, person] = r.split(" -");
        let persons = person.split(", ");
        for (let per of persons) {
          per = per.trim();
          let [name, salary] = per.split(" ");
          salary = Number(salary);
          //console.log(salary)
          if (!restaurant.hasOwnProperty(res)) {
            restaurant[res] = {
              average: salary,
              staff: [],
              best: { name, salary },
            };
            restaurant[res].staff.push({ name, salary });
  
            //console.log(restaurant[res])
          } else {
            restaurant[res].average += salary;
            restaurant[res].staff.push({ name, salary });
            restaurant[res].staff.sort((a, b) => b.salary - a.salary);
            let b = restaurant[res].best;
  
            if (b.salary < salary) {
              restaurant[res].best = { name, salary };
            }
          }
        }
      }
      let result = sort();
      console.log(result);
      function sort() {
        for (const key in restaurant) {
          let av = (
            restaurant[key].average / restaurant[key].staff.length
          ).toFixed(2);
          restaurant[key].average = av;
          console.log(restaurant[key].staff);
        }
        let sorted = Object.entries(restaurant).sort(
          (a, b) => b[1].average - a[1].average
        );
        const bestRestaurant = sorted.shift();
        //console.log(bestRestaurant);
  
        const p = document.querySelector("#bestRestaurant p");
        p.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${
          bestRestaurant[1].average
        } Best Salary: ${bestRestaurant[1].best.salary.toFixed(2)}`;
        let work=[];
        
        for (const b of bestRestaurant[1].staff) {
           work.push(`Name: ${b.name} With Salary: ${b.salary}`);
        }
        const w=document.querySelector('#workers p');
        w.textContent=work.join(' ')
      }
    }
  }