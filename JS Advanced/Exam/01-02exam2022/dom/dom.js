//    let addOpen = sections[1].querySelector("div:nth-of-type(2)");
class LibraryCollection{
    constructor(capacity){
       this.capacity=capacity,
       this.books=[];
    }
    addBook (bookName, bookAuthor){
        let leng=this.books.length
        if(leng >=this.capacity){
            throw new Error("Not enough space in the collection.")
        }
        this.books.push({bookName, bookAuthor, payed:false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
         
    }
    payBook( bookName ){
        let some=this.books.some(x=>x.bookName===bookName);
        let find=this.books.find(x=>x.bookName===bookName);
        if(some===false){
            throw new Error(`${bookName} is not in the collection.`)
        }
        if(find.payed===true){
            throw new Error(`${bookName} has already been paid.`)
        }
        find.payed=true;
        return `${bookName} has been successfully paid.`
        
    }
    removeBook(bookName){
        let some=this.books.some(x=>x.bookName===bookName);
        let find=this.books.find(x=>x.bookName===bookName);
        if(some===false){
            throw new Error("The book, you're looking for, is not found.")
        }
        if(find.payed===false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let index=this.books.indexOf(find);
        //console.log(index)
        let a=this.books.splice(index,1)
        this.books=a
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor){
        //console.log(bookAuthor)
        let find=this.books.find(x=>x.bookAuthor===bookAuthor);
        let s=this.books.some(x=>x.bookAuthor===bookAuthor);

        if(bookAuthor===undefined){
            let result=[];
            let spot=this.capacity - (this.books.length)
            result.push(`The book collection has ${spot} empty spots left.`)
            //this.books.map(x=>console.log(x.bookName))
           let arr= this.books.sort((a,b)=>a.bookName.localeCompare(b.bookName));
           //arr.map(x=>console.log(x.bookName))
           arr.forEach(x=>{
            let str=''
            if(x.payed===false){
                str=`Not Paid`
            }else{
                str=`Has Paid`
            }
               result.push(`${x.bookName} == ${x.bookAuthor} - ${str}.`)
           })
           return result.join('\n')
        }
        if(bookAuthor!==undefined){
            if(s===false){
                throw  new Error(`${bookAuthor} is not in the collection.`)
            }
            let str=''
            if(find.payed===false){
                str=`Not Paid`
            }else{
                str=`Has Paid`
            }
            let result=`${find.bookName} == ${find.bookAuthor} - ${str}.`
            return result
        }
           
        
    }

}
try {
    const library = new LibraryCollection(5)
    library.addBook('Don Quixote', 'Miguel de Cervantes');
    library.payBook('Don Quixote');
    library.addBook('An Search of Lost Time', 'Marcel Proust');
    library.addBook('Ulysses', 'James Joyce');
    console.log(library.getStatistics());
    
    
    
    
    
} catch (error) {
    console.log(error)
}

