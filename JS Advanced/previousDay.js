function solve(year,month,day){
    let date=new Date(year,month,day)
    let getDate=date.getDate()-1;
    
    let full=date.getFullYear()
    let getMonth=date.getMonth();

    if(getDate===0){
        getDate=30;
        getMonth-=1
    }
    
    console.log(`${full}-${getMonth}-${getDate}`)
}
solve(2016, 9, 30);
solve(2016, 10, 1);

