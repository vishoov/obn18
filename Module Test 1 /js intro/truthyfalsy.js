// if(5&&"10"){
//     console.log("truthy")
// }else{
//     console.log("Falsy")
// } 


// console.log(5&&10)


// console.log(0.3==(0.1+0.2))

// EXAMPLE FOR SHORT CIRCUITq
let username

let name = username || "default"

if(name){
    console.log("Working")
}else{
    console.log("Error")
}


console.log([1, 2] + [3, 4]); //here + operator acted like concatenation


console.log([1, 2] == '1,2');

console.log([1] == 1);

console.log([1, 2, 3].length == true);

// const arr = [1,2,3]
// console.log(arr.length)


let a = 0, b = null, c = undefined;
console.log(a || b || c || 'default');
console.log("undefined" ?? b ?? c ?? 'default');
console.log((a || b) ?? (c || 'default'));

console.log((a ?? b) || (c ?? 'default'));
