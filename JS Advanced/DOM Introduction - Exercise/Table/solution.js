function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    function onClick() {
       //   TODO:
       let search=document.getElementById('searchField');
       let tr=document.querySelectorAll('tbody tr');
       let trArr=Array.from(tr);
       trArr.forEach(t=>{
          t.classList.remove("select");
         let td=Array .from(t.children);
          for (const d of td) {
             console.log(d.textContent)
             if(d.textContent.includes(search.value)){
                 t.setAttribute('class','select')
             }
          }
          
       })
       search.value='';
 
    }
 }