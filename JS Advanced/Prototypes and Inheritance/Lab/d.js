class Demo{
    constructor(width, ) {
      
        this._width = width;
        
    }
    get area() {
        this.width = 10*(this._width);
       
        console.log(this.width )
        return this.width 
    }
}
let c=new Demo(10);
console.log(c.area)
c=new Demo(2);
console.log(c.area)
c=new Demo(8);
console.log(c.area)
this.width=5
console.log(c.area)