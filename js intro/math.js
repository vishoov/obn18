//Math object 

// Math object this is a builtin static object that provides mathematical constants and functions



let number = 833.33333
// number = Math.round(number)


console.log(Math.round(83.30740730707037074))


Math.floor(84.33334) //84
Math.ceil(84.3334) //85

Math.trunc(4.9) //4
Math.trunc(-4.9) //-4
console.log(Math.trunc(4.99999999))

console.log(Math.round(5.5))


let pi = 3
const newpi = pi.toFixed(2) //returns a string
console.log(typeof(newpi))


console.log(parseInt(newpi)) //string -> number


parseFloat() //string -> float


// NaN Not a number

let resultt = parseInt("HEllo");
let calc  = 0/0;

let invalid = Math.sqrt(-1)  


console.log(isNaN(resultt))

console.log(NaN===NaN)


// = assignment operator 
//  == loose comparison (type compare X)
console.log(2=="2")
//=== strict comparison (type is also checked)
console.log(2==="2")


console.log(1/0) //infinity


//Type coercion
console.log(1 + "1");
console.log(1-"1")
console.log("1"-1)
console.log("1"+1)
console.log("5"/2)

// This happends because the + operator performs string concatenation when one operand is a string, but -, * and / operators coerce strings to numbers


console.log(([1,2,3,4] + [5,6,7,8]))
// arrays are converted to strings during concatenation

console.log([] + {})

const user = {
    name:"ABC",
    age:20,
    city:"Delhi"
}


console.log("20" - "10");
console.log("20" + "10");
console.log("20" * "2");
console.log("20" / "5");


console.log(true + true); //2
console.log(true + false); //1
console.log(false + false); //0
console.log(true * 5); //5
//boolean values are coerced into numbers


console.log(1 == "1");
console.log(1 === "1");
console.log(null == undefined);
console.log(null === undefined);
// == performs type coercion before checking
//  === check both type and value

// https://github.com/vishoov/obn18