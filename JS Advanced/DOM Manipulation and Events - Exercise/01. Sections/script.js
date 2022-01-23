function create(words) {
  //console.log("TODO:...");
  const divContent = document.querySelector("#content");
  for (const w of words) {
    let div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = w;
    p.style.display='none'
    div.appendChild(p);
    div.addEventListener('click',()=>{
       p.style.display='block'
    })
    divContent.appendChild(div);
   
    
  }
}
