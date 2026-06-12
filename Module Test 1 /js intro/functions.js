//Fubnctions Declarations
// function declaration defines a anmed function using different kinds of ways including function keyword, function expression etc....

//bebcabuse javascript is a highly typed language we dont need to give functions return types 

// Debfault declaration using the function keyword
// important keywords
//function -> default function declaration keyword
//number1, number2 -> parameter
//return statement -> output the data
//function name(parameters){
// function logic
// return statement
// }
// function addNumbers(number1, number2){
//     let sum = number1+number2

//     if(false){
//         return 
//     }
//     return sum
// }

// addNumbers(5, 4)
// //5, 4 argument


// //V8 


// let name = "Abc"


// //write a function to print the table of a number parameter -> number 



// function table(n){
//     for(let i=1; i<=10; i++){
//         console.log(`${n} X ${i} = ${n*i}`)
//     }
    
//     return "Table Completed"
// }
// console.log(table(10))



// // Function Expressions
// // functions are 'first-class-objects' 

// console.log(typeof table)

// // we are defining the function as an expression and assigning it to a variable 


// //anonymous function
// const greet = function(){
//     console.log("Hello world")
// }

// greet()



// //Arrow functions (ES6)



// const multiply = (x, y) => x*y;


// console.log(multiply(5, 10))


// // functions accept inputs in form of parameters while declaring, and product an output using the logical statements
// // Parameter-> variable listed in the functions declaration
// // Argument-> actual value that will be passed while calling the function
// // return -> value that will be sent back from the function



// function print(a, b){
//     console.log("A")
//     console.log(a, b)
// }


// function print(a){
//     console.log('B')
//     console.log(a)
// }


// print(10, 20)
// print(10, 20)
// print(10, 20)




function createCounter() {

    var count = 0; 
  
    return function() {
      count++;
      console.log(count);
    //   return count;÷
    };
  }

  let myCounter =  ();
  
// console.log(count)
const result =  myCounter(); 
result();
  myCounter(); 
  myCounter(); 


//   3 scopes
// global, function, block
// let and const respect all scopes
// var doesnt respect block scope





function abc(){
  return "Hello"
}

console.log(abc());