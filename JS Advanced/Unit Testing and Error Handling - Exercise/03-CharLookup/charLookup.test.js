const lookupChar=require('./charLookup')
const expect=require('chai').expect

describe('Lookup Char',()=>{
    it('is not a string',()=>{
        expect(lookupChar(1,1)).to.be.undefined;
        expect(lookupChar([],1)).to.be.undefined;
        expect(lookupChar(undefined,1)).to.be.undefined;
        expect(lookupChar({},1)).to.be.undefined;
    })
    it('is not a number',()=>{
        expect(lookupChar('1',1.1)).to.be.undefined;
        expect(lookupChar('1',undefined)).to.be.undefined;
        expect(lookupChar('1',[])).to.be.undefined;
        expect(lookupChar('1',{})).to.be.undefined;
        expect(lookupChar('1','1')).to.be.undefined;
    })
    it('Incorrect index',()=>{
        //.to.eq('odd')
        // expect(lookupChar('a', 1)).to.eq('Incorrect index')
       expect(lookupChar('a',1)).to.equal('Incorrect index')
       expect(lookupChar('a',-1)).to.equal('Incorrect index')
       expect(lookupChar('aaa',12)).to.equal('Incorrect index')
      
    })
    it('Valid str',()=>{
        //.to.eq('odd')
        // expect(lookupChar('a', 1)).to.eq('Incorrect index')
       expect(lookupChar('a',0)).to.equal('a')
       expect(lookupChar('aaa',2)).to.equal('a')
       expect(lookupChar('aaa',1)).to.equal('a')
      
    })
    it(`valid input -> (ab, 1) -> b`, () => {
        expect(lookupChar('ab', 1)).to.eq('b')
    })
    
    
})