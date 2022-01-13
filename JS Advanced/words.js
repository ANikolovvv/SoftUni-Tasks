function solve(str){
  let reg=/\w+/g;
  let match=str.match(reg);
  let arr=[]
  match.forEach(e => {
      arr.push(e.toUpperCase())
  });
  console.log(arr.join(', '))
}
solve('Functions in JS can be nested, i.e. hold other functions')