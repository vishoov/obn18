// Library management system

// how OOP works

// Entities: book, member


class Book{
    // title, author, isbn, isAvailable
    constructor(title, author, isbn){
        this.title = title;
        this.author= author;
        this.isbn = isbn;
        this.isAvailable = true
    }

    //step 2 methods

    rentOut(){
        if(this.isAvailable==true){
        this.isAvailable=false;
        }else{
            console.log(`${this.title} is already rented to soneone else`)

        }
        console.log(`${this.title} is rented out successfully`)
    }

    returnBook(){
        if(this.isAvailable==false){
        this.isAvailable=true;
    
        }else{
            console.log(`${this.title} is already returned`)
        }

        console.log(`${this.title} successfully rented`)
    }

    checkAvailability(){
        if(this.isAvailable==true){
            console.log(`${this.title} is available to be rented`)
        }else{
            console.log(`${this.title} is not available`)
        }
    }
}


const book1 = new Book('the fault in our stars', 'unknown', '001');
console.log(book1);
book1.rentOut();
console.log(book1.isAvailable);
book1.returnBook();
console.log(book1.isAvailable);

book1.checkAvailability()

const book2 = new Book('dictionary', 'idk', '002');
book2

book2.rentOut();
book2.checkAvailability();

function checkAvailability(){
    console.log('this checks isAvailable')
}

checkAvailability()


