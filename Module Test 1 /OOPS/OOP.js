// Class -> Blueprint
// Instance -> objects 

// Constructor Functions 

class User{
    //data
    constructor(inputname, inputage, inputemail){
this.name=inputname,
this.age = inputage,
this.email = inputemail


    }

    //methods
}


const aman = new User('aman');
const nitin = new User('nitin');
console.log(aman)
console.log(nitin)

const newArr = new Array(1, 2, 3, 5);
console.log(newArr)


// Constructor Functions 

function Person(name, age){
    this.username= name
    this.age=age
}

const User1= new Person('sameer');

console.log(User1)


// Why constructor functions matter

// 1. building reusable component 
// 2. creating multiple instances with consistent structure 
// 3. to organize user info to avoid conflict of rules 


// how do we differentiate between a normal function and a constructor function 
// 1. NAmin convection (start with capital letters)
// 2. Inovcation MEthod (always use new with constructor function)
// 3. Purpose -> used for initializing new oject instances

function greet(){
    console.log("Hello")
}

greet();


// the new keyword 

// 1. creates a new empty object 
// 2. sets 'this' to point to that new object 
// 3. Links the object to the constructor's prototype
// return the object 

// NOTE: constructor is a reserved keyword inside a class outside it will act as a normal function 
// function constructor(name){
//     this.name= name 
// }


// const obj = new constructor('example')
// console.log(obj)
class Car{
    constructor(name, model){
        this.name = name;
        this.model = model
    }


    makeSound(){
        console.log('revv!!!!');
    }
}


const audi = new Car('audi', 'r8')



class student{

    constructor(name, roll){
     this.name = name;
     this.rollNo = roll;
    }

    // greet : hello my name is 
    greet(){
        return `Hello, my name is ${this.name}`;
    }


    getRoll(){
        return `My roll number is ${this.rollNo}`
    }

    createPassword(password, confirmPassword){
        if(password.length<8 || password!==confirmPassword){
            return 'password is invalid'
        }else{
            this.password = password;
            return 'password created';
        }
    }
}

const jayant = new student('jayant', 21)
const cyril = new student('cyril', 3)
const amancool = new student('aman', 1)

console.log(jayant)

console.log(cyril.greet())
console.log(amancool.getRoll())
console.log(amancool.createPassword('123456789', '1234567'))
console.log(amancool)