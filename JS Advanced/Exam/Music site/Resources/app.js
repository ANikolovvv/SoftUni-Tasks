window.addEventListener("load", solve);

function solve() {
  let addBtn = document.getElementById("add-btn");
  let genre = document.getElementById("genre");
  let name = document.getElementById("name");
  let author = document.getElementById("author");
  let date = document.getElementById("date");

  let allHits = document.getElementById("all-hits");
  let savedHit = document.getElementById("saved-hits").children[0];
  let index = 0;
  let form=document.querySelector('form');

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let d=new FormData(form)
    let n=d.get('name')
    let v=d.get('date')
    console.log(n);
    console.log(v);
  })
  // addBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
    
  //   if (
  //     genre.value != "" &&
  //     name.value != "" &&
  //     author.value != "" &&
  //     date.value != ""
  //   ) {
  //     let conteiner = allHits.children[0];
  //     let div = document.createElement("div");
  //     div.className = "hits-info";

  //     let img = document.createElement("img");
  //     img.src = "./static/img/img.png";
  //     div.appendChild(img);

  //     let h2P = document.createElement("h2");
  //     h2P.textContent = `Genre: ${genre.value}`;
  //     div.appendChild(h2P);

  //     let h2N = document.createElement("h2");
  //     h2N.textContent = `Name: ${name.value}`;
  //     div.appendChild(h2N);
  //     let h2A = document.createElement("h2");
  //     h2A.textContent = `Author: ${author.value}`;
  //     div.appendChild(h2A);
  //     let h3 = document.createElement("h3");
  //     h3.textContent = `Date: ${date.value}`;
  //     div.appendChild(h3);

  //     let btnSave = document.createElement("button");
  //     btnSave.className = "save-btn";
  //     btnSave.textContent = "Save song";
  //     div.appendChild(btnSave);
  //     let btnLike = document.createElement("button");
  //     btnLike.className = "like-btn";
  //     btnLike.textContent = "Like song";
  //     div.appendChild(btnLike);
  //     let btnDelete = document.createElement("button");
  //     btnDelete.className = "delete-btn";
  //     btnDelete.textContent = "Delete";
  //     div.appendChild(btnDelete);

  //     conteiner.appendChild(div);
  //     genre.value = "";
  //     name.value = "";
  //     author.value = "";
  //     date.value = "";
  //     btnLike.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       index++;
  //       let sectionTotalLikes = document.getElementById("total-likes");
  //       sectionTotalLikes.children[0].children[0].textContent = `Total Likes: ${index}`;
  //       e.target.disabled = true;
  //     });
  //     btnSave.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       savedHit.appendChild(e.target.parentNode);
  //       e.target.parentNode.children[6].remove();
  //       e.target.parentNode.children[5].remove();
  //     });
  //     btnDelete.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       let id = e.target.parentNode;
  //       id.remove();
  //     });
  //   }
  // });
}
