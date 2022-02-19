function solve() {
  //TODO
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");
  let birth = document.getElementById("birth");
  let position = document.getElementById("position");
  let salary = document.getElementById("salary");
  let btnAdd = document.getElementById("add-worker");
  let t = document.querySelector("#sum");
  let total = 0;

  let tbody = document.getElementById("tbody");

  btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      fname.value !== "" &&
      lname.value !== "" &&
      email.value !== "" &&
      birth.value !== "" &&
      position.value !== "" &&
      salary.value !== ""
    ) {
      //console.log(mess)

      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      td1.textContent = fname.value;
      let td2 = document.createElement("td");
      td2.textContent = lname.value;
      let td3 = document.createElement("td");
      td3.textContent = email.value;
      let td4 = document.createElement("td");
      td4.textContent = birth.value;
      let td5 = document.createElement("td");
      td5.textContent = position.value;
      let td6 = document.createElement("td");
      td6.textContent = salary.value;

      let tdbtn = document.createElement("td");
      let btnFired = document.createElement("button");
      btnFired.className = "fired";
      btnFired.textContent = "Fired";

      btnFired.addEventListener("click", (e) => {
        let target = e.target.parentNode.parentNode;

        let ch = Array.from(target.querySelectorAll("td"));
        let find = Number(ch[5].textContent);
        //console.log(find)
        total -= find;
        let f = total.toFixed(2);
        t.textContent = f;
        //console.log(ch)

        target.remove();
      });

      let btnEdit = document.createElement("button");
      btnEdit.className = "edit";
      btnEdit.textContent = "Edit";
      btnEdit.addEventListener("click", (e) => {
        let target = e.target.parentNode.parentNode;

        let ch = Array.from(target.querySelectorAll("td"));
        let find = Number(ch[5].textContent);
        //console.log(find)
        total -= find;
        let f = total.toFixed(2);
        t.textContent = f;

        //console.log(ch)
        fname.value = ch[0].textContent;
        lname.value = ch[1].textContent;
        email.value = ch[2].textContent;
        birth.value = ch[3].textContent;
        position.value = ch[4].textContent;
        salary.value = ch[5].textContent;

        target.remove();
      });

      tdbtn.appendChild(btnFired);
      tdbtn.appendChild(btnEdit);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.appendChild(tdbtn);
      tbody.appendChild(tr);

      let r = Number(salary.value);
      total += r;
      let f = total.toFixed(2);

      t.textContent = f;

      fname.value = "";
      lname.value = "";
      email.value = "";
      birth.value = "";
      position.value = "";
      salary.value = "";
    }
  });
}
solve();
