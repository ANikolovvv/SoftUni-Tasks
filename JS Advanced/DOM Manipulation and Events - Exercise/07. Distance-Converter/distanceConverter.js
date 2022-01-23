function attachEventsListeners() {
   const obj={
       'km':1000,
       'm':1,
       'cm':0.01,
       'mm':0.001,
       'mi':1609.34,
       'yrd':0.9144,
       'ft':0.3048,
       'in':0.0254
   }
   const btn=document.getElementById('convert');

   btn.addEventListener('click',solve);
   let input=document.getElementById('inputUnits');
   let distance=document.getElementById('inputDistance');

   let output=document.getElementById('outputUnits');
   let outDistance=document.getElementById('outputDistance');
   outDistance.value='';
   distance.value='';
   
   function solve(e) {
    let result=Number(obj[input.value] * distance.value);
 
    //console.log(result)

    let total =result/obj[output.value];
   
    outDistance.value=total
   }
   
}