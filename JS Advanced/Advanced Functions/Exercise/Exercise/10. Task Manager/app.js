function solve() {
    let addButon = document.querySelector("#add");
    let task = document.querySelector("#task");
    let description = document.querySelector("#description");
    let date = document.querySelector("#date");
  
    addButon.addEventListener("click", (e) => {
      e.preventDefault();
      if (task.value == "" || description.value == "" || date.value == "") {
        return;
      }
      if (task.value !== "" && description.value !== "" && date.value !== "") {
        //console.log("yes");
        let first = document.querySelectorAll("section:nth-child(2) > div")[1];
  
        let artical = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = task.value;
        let p1 = document.createElement("p");
        p1.textContent = `Description: ${description.value}`;
        let p2 = document.createElement("p");
        p2.textContent = `Due Date: ${date.value}`;
  
        let div = document.createElement("div");
        div.setAttribute("class", "flex");
        let greenBut = document.createElement("button");
        greenBut.setAttribute("class", "green");
        greenBut.textContent = "Start";
        let redBut = document.createElement("button");
        redBut.setAttribute("class", "red");
        redBut.textContent = "Delete";
        div.appendChild(greenBut);
        div.appendChild(redBut);
  
        artical.appendChild(h3);
        artical.appendChild(p1);
        artical.appendChild(p2);
        artical.appendChild(div);
        first.appendChild(artical);
        task.value = "";
        description.value = "";
        date.value = "";
  
        redBut.addEventListener("click", (e) => {
       
          artical.remove();
        });
  
        greenBut.addEventListener("click", (e) => {
          let second = document.querySelectorAll("section:nth-child(3) > div")[1];
  
          second.appendChild(artical);
          greenBut.remove();
          let f = document.createElement("button");
          f.setAttribute("class", "orange");
          f.textContent = "Finsh";
  
          div.appendChild(f);
  
          f.addEventListener("click", (e) => {
            let fo = document.querySelectorAll("section:nth-child(4) > div")[1];
            div.remove()
            fo.appendChild(artical);
          });
        });
      }
    });
  }