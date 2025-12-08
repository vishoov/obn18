function sayHello(name){
    console.log(`Hello, ${name}`)
}

function sayBye(name){
    console.log(`Goodbye, ${name}`)
}



let isLeaving = true;
let name = "Alice"


//if alice is leaving sayGoodbye, else say hello

isLeaving ? sayBye(name):sayHello(name) 

// Uses
// 1. implementing any logic
// 2. call any function
//   3. assigning values

const age = 20

const canVote = age > 18?"Yes, can vote":"No, cannot vote"

console.log(canVote)


// Best practices
// keep ternary operators simple and easy to read
// avoid nesting in ternary operators
// use it for simple calculations, assigning or returning values not for complex multi step logics 

// flag ? {

// }:{

// }




