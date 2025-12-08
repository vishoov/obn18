function double(num) {
    return (num * 2);
  }
  
console.log(typeof double)
  var double = 22;

  console.log(typeof double); 


//   hoisting
// double = undefined
//double = function
//hoisting complete
// runtime
// var overrides the type function to number



let rate = 10

function calculate(){
    console.log(rate);
    let rate = 20
}

calculate();
