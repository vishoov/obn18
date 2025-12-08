// let number = 10;
// console.log(number)



// //Global scope
// // variable declared outside of ay function or block have a global scope, these global varianles are accessible from anywhere within the entire program 


let globalVariable = "I am a global guy"

function abc(){
    console.log(globalVariable)
}

abc()


// // Function scope 

// // variables declared within a function are confined to that function in which they are declared. these variables are accessible inside the function but not oustide of it 


// function myFunction(){
//     let functionvariable = "i am function scoped"
//     console.log(functionvariable)
// }
// myFunction()
// console.log(functionvariable)



if(true){
    var varVariable = "I am declared with var"
    let letVariable = "I am declared with let"

}


console.log(varVariable)
// console.log(letVariable)

// block scope is any section of code that is enclosed with {}
//if, for, while, {} 

// Variables declared with let and const are ONLY ACCESSIBLE within the block they are defined in
// var does not respect block scope 


let number = 10
//global scope
function func(){
    //function scope
    if(true){
        //block scope
        var innernumber = 50
    }
}
// console.log(innernumber)

func()



console.log(sayHello)

var sayHello = function() {
  console.log("Hello from Variable!");
};

// function sayHello() {
//   console.log("Hello from Function!");
// }

sayHello();

// functions declaration are hoisted completely (name + body)