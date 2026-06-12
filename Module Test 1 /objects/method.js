const person = {
    firstName:"Mark",
    lastName:"Zuck",
    age:40,

    // ES5 way of implementing a method
    fullName: function(){
        return this.firstName + ' ' + this.lastName
    },

    //method using ES6
    greet(){
        console.log("Hello, " + this.firstName)
    }

}


console.log(person.age)
console.log(person.fullName())
person.greet()



const car = {
    //brand, model, year
    brand:"Bugatti",
    model:"Chiron",
    year:2024,

    // start() -> {brand}, {model} is starting....
    start(){
        console.log(`${this.brand}, ${this.model} is starting....`)
    },

    // info() -> brand, model, year
    info(){
        return `${this.brand} ${this.model} ${this.year}`
    }
}

car.start()

console.log(car.info())



const user = {
    // firstName, lastName
    firstName:"Elon",
    lastName:"Musk",

    // fullName() 
    get fullName(){
        return `${this.firstName}, ${this.lastName}`
    },

    // setName(name) -> firstName, lastName
    // setName("John Cena") -> firstName-> John, lastName:Cena
    set fullName(name){
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1]
    }
}


console.log(user.fullName)
user.fullName="John Cena"
console.log(user.fullName)


const person2 = {
    name:"person"
}

person2.age=20

console.log(person2)



// bankAccount 
// balance :1000
// deposit
// withdraw

const bankAccount = {
    balance:1000,
// setr
    setBalance(newAmount){
        this.balance = newAmount
    },
// get
    deposit(amount){
        const newBalance = this.balance+amount
        this.setBalance(newBalance)
        console.log(`Deposted ${amount}, to the account, new balance is ${this.balance}`)
    },

    withdraw(amount){
        if(amount>this.balance){
            console.log("Insufficient Balance")
        }else{
          this.setBalance(this.balance-amount)
            console.log(`Withdrawn ${amount}, New Balance is ${this.balance}`)
        }
    }


}


bankAccount.deposit(200)
bankAccount.withdraw(500)
bankAccount.withdraw(800)