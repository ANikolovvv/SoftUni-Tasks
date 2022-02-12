let {Repository}=require('../save.js')
let{assert}=require('chai')


describe('Repository', () => {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    let clonedEntity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe('props',()=>{
        it('props',()=>{
            // assert.throws(function () {
            //     new StringBuilder(1);
            //   }, "Argument must be a string");
            assert.typeOf(properties, 'object', 'we have an object');
        })
    })
    describe('func add',()=>{
        it('entity',()=>{
            assert.typeOf(entity, 'object', 'we have an object');
            assert.typeOf(entity.name, 'string', 'we have an string');
            assert.typeOf(entity.age, 'number', 'we have an number');
           assert.equal(entity.birthday,`Wed Jan 07 1998 00:00:00 GMT+0200 (Източноевропейско стандартно време)`,'we have an map');
        })
       
    })
    it('throw err',()=>{
        let obj = {
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
        // assert.throws(function () {
        //     library.calcPriceOfBook(1, 1);
        //   }, "Invalid input");
        let rep = new Repository(properties);
        assert.throws(function(){
            rep.add(obj);
        },`Property name is missing from the entity!`);

        assert.throws(function(){
            rep.add({name:10,age:10,birthday:new Date(1998,0,7)});
        },`Property name is not of correct type!`);
        assert.throws(function(){
            rep.add({name:{},age:10,birthday:new Date(1998,0,7)});
        },`Property name is not of correct type!`);
        assert.throws(function(){
            rep.add({name:[],age:10,birthday:new Date(1998,0,7)});
        },`Property name is not of correct type!`);
        assert.throws(function(){
            rep.add({name:undefined,age:10,birthday:new Date(1998,0,7)});
        },`Property name is not of correct type!`);

        let a={name:'Asefgv',birthday:new Date(1998,0,7)}
        assert.throws(function(){
            rep.add(a);
        },`Property age is missing from the entity!`);
        assert.throws(function(){
            rep.add({name:'Asefgv',age:'h',birthday:new Date(1998,0,7)});
        },`Property age is not of correct type!`);
        assert.throws(function(){
            rep.add({name:'Asefgv',age:{},birthday:new Date(1998,0,7)});
        },`Property age is not of correct type!`);
        assert.throws(function(){
            rep.add({name:'Asefgv',age:undefined,birthday:new Date(1998,0,7)});
        },`Property age is not of correct type!`);


        let b={name:'asdd',age:22}
        assert.throws(function(){
            rep.add(b);
        },`Property birthday is missing from the entity!`);
        assert.throws(function(){
            rep.add({name:'Asefgv',age:20,birthday:10});
        },`Property birthday is not of correct type!`);
        assert.throws(function(){
            rep.add({name:'Asefgv',age:20,birthday:''});
        },`Property birthday is not of correct type!`);
        assert.throws(function(){
            rep.add({name:'Asefgv',age:20,birthday:undefined});
        },`Property birthday is not of correct type!`);
    })
    describe('get id',()=>{
        it('id error',()=>{
            let rep= new Repository(properties);
            assert.throws(function(){
                rep.getId(2);
            },`Entity with id: 2 does not exist!`);
            assert.throws(function(){
                rep.getId('a');
            },`Entity with id: a does not exist!`);
           
        })
        it('valid get',()=>{
            let rep= new Repository(properties);
            assert.equal(rep.add(entity),0)
            assert.equal(rep.add(entity),1)
            //rep.add(entity); // Returns 1

        })

    })
    describe('update(id, newEntity) ',()=>{
        it('update error',()=>{
            let invalidEntity1 = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let invalidEntity2 = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7)
            };

            let invalidEntity3 = {
                name: "Pesho",
                age: 22,
            };

            let repo= new Repository(properties);
            repo.add(entity);

            //            expect(() => repo.update(0, invalidEntity1)).to.throw(Error, `Property name is missing from the entity!`)
            assert.throws(function(){
                repo.update(0,invalidEntity1);
            },`Property name is missing from the entity!`);
            assert.throws(function(){
                repo.update(0,invalidEntity2);
            },`Property age is missing from the entity!`);
            assert.throws(function(){
                repo.update(0,invalidEntity3);
            },`Property birthday is missing from the entity!`);
      
        })
        it('up',()=>{
            let newEntity = {
                name: "Gosho",
                age: 32,
                birthday: new Date(1999, 0, 7)
            };

            let repo = new Repository(properties);

            repo.add(entity);
            repo.update(0, newEntity);

            //expect(repo.getId(0).name).to.equal('Gosho');
            assert.equal(repo.getId(0).name,'Gosho')
        })

    })
    describe('del(id, newEntity) ',()=>{
        it('del error',()=>{
            let rep= new Repository(properties);
            assert.throws(function(){
                rep.del(2);
            },`Entity with id: 2 does not exist!`);
            assert.throws(function(){
                rep.del('a');
            },`Entity with id: a does not exist!`);
      
        })

    })
    describe('count',()=>{
        it('0',()=>{
            let rep= new Repository(properties);
          assert.equal(rep.count,0,'yes')
      
        })

    })
  
});