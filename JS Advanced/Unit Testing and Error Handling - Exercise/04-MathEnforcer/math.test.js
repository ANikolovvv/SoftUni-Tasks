const mathEnforcer=require('./math')
const expect=require('chai').expect

describe('Math enforcer',()=>{
    describe('addFive(num)=>{}',()=>{
        it('Add five is not a number',()=>{
            expect(mathEnforcer.addFive('a')).to.be.undefined
            expect(mathEnforcer.addFive([])).to.be.undefined
            expect(mathEnforcer.addFive(undefined)).to.be.undefined
            expect(mathEnforcer.addFive()).to.be.undefined
            expect(mathEnforcer.addFive(true)).to.be.undefined
            expect(mathEnforcer.addFive(false)).to.be.undefined

        })
        it('It is a number',()=>{
            expect(mathEnforcer.addFive(1.1)).to.equal(6.1)
            expect(mathEnforcer.addFive(1)).to.equal(6)
            expect(mathEnforcer.addFive(-1)).to.equal(4)
           
        })
    })
    describe('sum(num1,num2)=>{}',()=>{
        it('sum is not a number',()=>{
            expect(mathEnforcer.sum('a',1)).to.be.undefined
            expect(mathEnforcer.sum([],1)).to.be.undefined
            expect(mathEnforcer.sum(undefined,1)).to.be.undefined
            expect(mathEnforcer.sum(1,'')).to.be.undefined
            expect(mathEnforcer.sum(1,[])).to.be.undefined
            expect(mathEnforcer.sum()).to.be.undefined
            expect(mathEnforcer.sum(1,{})).to.be.undefined
            expect(mathEnforcer.sum('a',undefined)).to.be.undefined
            expect(mathEnforcer.sum(true,undefined)).to.be.undefined
            expect(mathEnforcer.sum(false)).to.be.undefined
            expect(mathEnforcer.sum(1)).to.be.undefined
            expect(mathEnforcer.sum(1,()=>{})).to.be.undefined
        })
        it('It is a number',()=>{
            expect(mathEnforcer.sum(1.1,1)).to.equal(2.1)
            expect(mathEnforcer.sum(3,1)).to.equal(4)
            expect(mathEnforcer.sum(3,-1)).to.equal(2)
            expect(mathEnforcer.sum(15,5)).to.equal(20)
            expect(mathEnforcer.sum(-1,-1)).to.equal(-2)
            expect(mathEnforcer.sum(5,-1)).to.equal(4)
            expect(mathEnforcer.sum(15.5,5.5)).to.equal(21)

            // assert.equal(a.sum(15,5),20)
            // assert.equal(a.sum(15.5,5),20.5)
            // assert.equal(a.sum(-1,-1),-2)
            // assert.equal(a.sum(5,-1),4)
            // assert.equal(a.sum(-1,5),4)
            // assert.equal(a.sum(15.5,5.5),21)
            
           
        })
    })
    describe('subtr(num)=>{}',()=>{
        it('subtr is not a number',()=>{
            expect(mathEnforcer.subtractTen('a')).to.be.undefined
            expect(mathEnforcer.subtractTen([])).to.be.undefined
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined
            expect(mathEnforcer.subtractTen({})).to.be.undefined
            expect(mathEnforcer.subtractTen()).to.be.undefined
            expect(mathEnforcer.subtractTen(false)).to.be.undefined
            expect(mathEnforcer.subtractTen(true)).to.be.undefined
            expect(mathEnforcer.subtractTen(true)).to.be.undefined
            expect(mathEnforcer.subtractTen(()=>{})).to.be.undefined
            
        })
        it('It is a number',()=>{
            expect(mathEnforcer.subtractTen(1.1)).to.equal(-8.9)
            expect(mathEnforcer.subtractTen(10)).to.equal(0)
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
            expect(mathEnforcer.subtractTen(15,15)).to.equal(5)
            expect(mathEnforcer.subtractTen(15.1,15.1)).to.equal(5.1)
           
        })
    })
   

})