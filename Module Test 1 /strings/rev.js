// function a() {
//     //Closure: it means that we are declaring and calling a function inside a function 
//     // this is used to prevent global variables to be declared
//     let name = 'Jon';
//     function b() {
//       console.log(name);
//     }
//     return b;
//   }
//   const fn = a();
//   console.log(fn)
//   fn(); //= b()

// let message = 'outside';

// function print() {

//   console.log(message);
//   let message = "inside"
// }

// print();


// 'use strict';
// let arr = 10;
// console.log(arr)

// for (var i = 0; i < 3; i++) {

//     console.log(i);
  
// }
  
//    console.log(i);

// for (var i = 0; i < 3; i++) {

//     setTimeout(() => console.log(i), 100);
  
// }

// let text = "Code";
// console.log(text.charAt(10));
// console.log(text[10]);
// console.log(text.charAt(-1));
// console.log(text[-1]);
// console.log(text["1"]);
// console.log(text.charAt("1"));


// let s = "x";
// let count = 0;

// s = s + count++;
// s = s + ++count;
// s += count++ + "y";
// s += ++count;

// console.log(s);
// console.log(count);


let s = "x";
let count = 0;

s = s + count++;
// s =x0
// count = 1
s = s + ++count;
// s= x02
// count = 2
s += count++ + "y";
// s = x022y
// count = 3
s += ++count;
// s = x022y4
// count =4
console.log(s);
console.log(count);
