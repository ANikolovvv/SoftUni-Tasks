function solve() {
  let genre = document.getElementById("genre");
  let name = document.getElementById("name");
  let author = document.getElementById("author");
  let date = document.getElementById("date");
  let butonAdd = document.getElementById("add-btn");
  console.log(butonAdd);
  let attach = document.querySelector(".all-hits-container");

  butonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    let g = genre.value;
    let n = name.value;
    let a = author.value;
    let d = date.value;
    console.log(genre.value.length);
    if (g.length > 0 && n.length > 0 && a.length > 0 && d.length > 0) {
      let div = document.createElement("div");
    
      div.setAttribute("class", "hits-info");
      let img = document.createElement("img");
      img.src = "./static/img/img.png";

      let h2 = document.createElement("h2");
      h2.textContent = `Genre: ${g}`;

      let h2name = document.createElement("h2");
      h2name.textContent = `Name: ${n}`;

      let h2author = document.createElement("h2");
      h2author.textContent = `Author: ${a}`;

      let h3 = document.createElement("h3");
      h3.textContent = `Date: ${d}`;
      genre.value = "";
      name.value = "";
      author.value = "";
      date.value = "";

      let butonSave = document.createElement("button");
      butonSave.setAttribute("class", "save-btn");
      butonSave.textContent = "Save song";
      let butonlike = document.createElement("button");
      butonlike.setAttribute("class", "like-btn");
      butonlike.textContent = "Like song";
      let butondelete = document.createElement("button");
      butondelete.setAttribute("class", "delete-btn");
      butondelete.textContent = "Delete";

      div.appendChild(img);
      div.appendChild(h2);
      div.appendChild(h2name);
      div.appendChild(h2author);
      div.appendChild(h3);

      div.appendChild(butonSave);
      div.appendChild(butonlike);
      div.appendChild(butondelete);

      attach.appendChild(div);

      butonlike.addEventListener("click", (e) => {
        let total = document.getElementById("total-likes");
        let di = total.children[0].children[0].textContent;
        let str = di.split(" ");
        let n = Number(str[2]);
        let newS = `${str[0]} ${str[1]} ${n + 1}`;
        total.children[0].children[0].textContent = newS;
        console.log(butonlike.disabled);
        butonlike.disabled = true;
        butonlike.style.background = "grey";
      });
      butonSave.addEventListener("click", (e) => {
        e.target.remove();
        butonlike.remove();
        let save = document.getElementById("saved-hits");
        let s = save.children[0];
        let saves = document.querySelector(".hits-info");
        s.appendChild(saves);
        //console.log(saves);
      });
      butondelete.addEventListener("click", (e) => {
        let dd = document.querySelector(".delete");
        document.querySelector(".hits-info").remove();
      });
    }
  });
}
