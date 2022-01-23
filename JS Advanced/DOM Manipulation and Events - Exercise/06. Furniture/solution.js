function solve() {
  let btns = Array.from(document.querySelectorAll("button"));
  const generate = btns[0];
  const buy = btns[1];
  const tbody = document.querySelector("tbody");
  let textareas=Array.from(document.querySelectorAll('textarea'));
  textareas[1].value='';
  let arr=[];

  generate.addEventListener("click", generateItem);
  buy.addEventListener("click", buyItem);

  function generateItem(e) {
    let obj = textareas[0].value;
  //   JSON.parse(generateInput.value).forEach(x =>
  //     tableBody.appendChild(htmlTemplate(x))
  // )
    let item = JSON.parse(obj);
    
      for (const i of item) {
        const tr = document.createElement("tr");
        const tdOne = document.createElement("td");
        const img = document.createElement("img");
        img.src = i.img;
        tdOne.appendChild(img);
        const tdTwo = document.createElement("td");
        const p=document.createElement('p');
        p.textContent=i.name;
        tdTwo.appendChild(p)
    
        const three = document.createElement("td");
        const price=document.createElement('p');
        price.textContent=Number(i.price);
        three.appendChild(price);
    
        const fourDiv = document.createElement("td");
        const pr=document.createElement('p');
        pr.textContent=Number(i.decFactor);
        fourDiv.appendChild(pr);
    
        const finalDiv = document.createElement("td");
        const input=document.createElement('input');
        input.type="checkbox";
      
        finalDiv.appendChild(input);
    
        tr.appendChild(tdOne);
        tr.appendChild(tdTwo);
        tr.appendChild(three);
        tr.appendChild(fourDiv);
        tr.appendChild(finalDiv);
        tbody.appendChild(tr);
        textareas[0].value=''
      }
   //console.log(item)
   
  }
  let totalPrice=0;
  let totalDecfactor=0;
  function buyItem(e) {
    let checkbox=Array.from(document.querySelectorAll('input[type="checkbox"]'));
    
    for (const box of checkbox) {
         if(box.checked===true){
          let parent=box.parentElement.parentElement;
           let [name,price,decfactor]=Array.from(parent.querySelectorAll('p'));
           arr.push(name.textContent);
           totalPrice+=Number(price.textContent);
           totalDecfactor+=Number(decfactor.textContent);
         }
    }
   totalPrice=(totalPrice).toFixed(2);
   totalDecfactor=totalDecfactor/arr.length;
   let result=[];
   result.push(`Bought furniture: ${arr.join(', ')}`);
   result.push(`Total price: ${totalPrice}`)
   result.push(`Average decoration factor: ${totalDecfactor}`)
    textareas[1].value=result.join('\n')

  }
  
  //TODO...
}
