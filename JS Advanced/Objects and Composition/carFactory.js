function solve(obj) {
    let small ={ power: 90, volume: 1800 };
    let normal ={ power: 120, volume: 2400 };
    let monster ={ power: 200, volume: 3500 };

    let hatchback={ type: 'hatchback', color:'' };
   let coupe = { type: 'coupe', color: ''};
   let car={model:obj.model}
    
    if(obj.power <=90){
         car['engine']=small  
    }else if(obj.power>90 && obj.power <=120){
        
        car['engine']=normal
    }else if(obj.power>120 && obj.power<=200){
        
        car['engine'] =monster;
    }
    if(obj.carriage==='hatchback'){
        hatchback.color=obj.color;
        car['carriage']=hatchback
    } else if(obj.carriage==='coupe'){
        coupe.color=obj.color;
        car['carriage']=coupe;
    
    }
    let wheels=[0,0,0,0]

    if(obj.wheelsize %2===0){
        let num=obj.wheelsize-1
        let replace=wheels.map(x=>x+num);
        
        car['wheels']=replace;
    }else{
        let replace=wheels.map(x=>x+obj.wheelsize);
        car['wheels']=replace;
    }
  return car
  
    
}
solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })
// solve({ model: 'Opel Vectra',
// power: 110,
// color: 'grey',
// carriage: 'coupe',
// wheelsize: 17 })