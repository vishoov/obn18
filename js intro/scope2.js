//scope 
//global scope 
// function scope 
// block scope


 


// if(true){
//      a = 10
//      b = 20

    
// }

// console.log(a)
// console.log(b)

            //  var                 let                     const
//scope         function            block                   block

// re-          allowed             not allowed             not allowed
// declaration

// re-          allowed             allowed                 not allowed
// assignment


// Hoisting Behaviour

// construct            hoisted?           initialized val      accessible before
//                                                              declaration

// var                  yes                 undefined           yes

// let                  yes                 uninitialised (TDZ)  no

// const                yes                 uninitialized (TDZ)  no

// function             yes                 function body       yes
// (declaration)

// function exp         variable only       depends on var/let/const   

// if the function expression is
// var -> type error
// let and const -> reference error

//function declaration -> function abc(){}
// function expression let func = function(){}


var foo = function bar(){
    console.log(typeof bar)
    return 1
}
console.log(typeof bar)
foo()



// var a = 10;
// {
//   let a = 20; 
//   console.log(a); 
// }

// let b = 10;
// {
//   var b = 20; 
//   console.log(b); 
// }



var foo = function bar() {
    console.log(typeof bar); 
    return 1;
  };
  
  console.log(typeof bar); 
  foo();
  