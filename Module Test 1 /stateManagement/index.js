// 1. object declaration best practice 
// to avoid global variable pollution
// to enhance organization
// to protect against naming conflicts
// to protect against XSS attacks

// 2. properties and methods

const calculator = {
    brand:"Casio",
    model:"40707",
//preexisting
    add: function(a, b){
        return a+b;
    },

    //es6
    subtract(a, b){
        return a-b;
    }


}


console.log(calculator.brand);
console.log(calculator.add(4, 2))
console.log(calculator.subtract(8, 4));

// 'this' keyword

// bankAccount -> owner, balance
// deposit, withdraw


const bankAccount = {
    owner:"aman",
    //NOTE: balance will become private in OOP
    balance:0,
    //this keyword refers to the bankAccount object
    deposit(amount){
        this.balance+=amount;
        console.log(`${this.owner}'s new balance : ${this.balance}`)
    },


    // withdraw 
    //balance > amount -> withdraw
    // balance< amount -> error : insufficient balance, cannot withdraw
    withdraw(amount){
        if(amount> this.balance){
            console.log('Insufficient Balance');
            return;
        }

        this.balance-=amount;
        console.log(`Withdrawn ₹${this.amount}, remaining balance: ${this.balance}`)
    }

}

console.log(bankAccount);
// bankAccount.balance-=50;
bankAccount.deposit(100)
bankAccount.withdraw(50);

// Context and binding 
// this is determined at the call time, not at the definition time. 

// arrow function and normal function 
// arrow functions dont have their 'this' keyword

const timer = {
    seconds:0,

    // increment(){
    //     this.seconds++;
    //     console.log(this.seconds)
    // }

    increment:()=>{
        this.seconds++;
        console.log(this.seconds);
    }
}

timer.increment();


// State Management Patterns ( best practices )

// State is any data that you store in your code to make the functionalities work
// state can change over time in our application-> user input, fetched data, UI visibility, flags


// 1. Single source of truth 
// where all of the app's states should be stored in a single central object 

let isLoggedIn = false;
let currentUser = null;
let cartItems = [];
let cartAmount = 0;
let sideMenuOpen = false;
// these variables are scattered 

// SINGLE SOURCE OF TRUTH
const appState = {
    auth:{
        isLoggedIn:false,
        currentUser:null
    },
    cart:{
        items:[],
        total:0
    },
    UI:{
        sideMenuOpen:false
    }
}

// Update and render Cycle

// User Action -> Update State -> Re-render UI (repaint and reflow)

// Always update the state first then update the dom 


// Configuration Object 

function createUser(name, age, role, isActive){
    //logic
}

createUser('Alice', 50, 'admin', true);

// how are we sure about the 4th parameter: true 

// configure object 
function createUser(config){
    const defaults = {
        role:'user',
        isActive:true
    }

    const settings = {...defaults, ...config};
    return {
        name:settings.name,
        age:settings.age,
        role:settings.role,
        isActive:settings.isActive
    }
}


const roopansh = createUser({name:"Roopansh", age:1, role:"admin"})
console.log(roopansh);