function search() {
    // TODO
    //search
    const button=document.querySelector('button');
    let counter=0;
    let towns=document.querySelectorAll('#towns li');
    //button.addEventListener('click',find);
    let search=document.getElementById('searchText').value;
    const result=document.getElementById('result')
 
   // function find(e){
     let list=Array.from(towns);
     list.forEach(l=>{
        if(l.textContent.includes(search)){
            counter++;
           l.style.textDecoration = "bold underline"
        }   
     })
     result.textContent=`${counter} matches found`;
   // }
 }