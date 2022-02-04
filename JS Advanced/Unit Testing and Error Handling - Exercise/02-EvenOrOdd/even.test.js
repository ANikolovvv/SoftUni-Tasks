const isOddOrEven=require('./even')
const expect=require('chai').expect;
//⦁	Char Lookup
describe('Even or Odd',()=>{
    it('it is string',()=>{
         //assert.equal(isOddOrEven(1),undefined,'not a string')
         //expect('foo').to.be.a('string');
         
         expect(isOddOrEven(1)).to.be.undefined; 
         expect(isOddOrEven([])).to.be.undefined; 
         expect(isOddOrEven({})).to.be.undefined; 
         expect(isOddOrEven(undefined)).to.be.undefined; 
         expect(isOddOrEven()).to.be.undefined; 
    })
    it('even',()=>{
       
       // assert.equal(isOddOrEven(str),'even','even')
       expect(isOddOrEven('aa')).to.equal('even')
       //expect(isOddOrEven('aa')).to.eq('even')
       
    })
    it('odd',()=>{
        
        //assert.equal(isOddOrEven(str),'odd','even')
        //
        expect(isOddOrEven('aaa')).to.eq('odd')
    })
   
})