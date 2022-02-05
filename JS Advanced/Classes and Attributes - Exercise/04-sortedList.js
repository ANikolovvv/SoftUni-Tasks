class List{
    constructor(){
        this.arr=[],
        this.size=this.arr.length
    }
    updateList=()=>this.size=this.arr.length;
    sorted=()=>this.arr.sort((a,b)=>a-b);
    
    add(num){
        this.arr.push(num);
        this.updateList();
        this.sorted();
    }
    remove(index){
        let len=this.arr.length;
        if(index<0||index > len){
            throw new Error('index  is not exists ')
        }
        this.arr.splice(index,1);
        this.updateList();
        this.sorted();
    }
    get(index){
        let len=this.arr.length;
        if(index<0||index > len){
            throw new Error('index  is not ')
        }
        this.updateList();
        this.sorted();
        let output=this.arr[index]
        return output
    }
   
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));