// if(condition){
//     //this block will opnly run if the condition evaluates to truthy
// }


// if(true){
//     console.log("Truthy")
// }


// // SHORT CIRCUIT
// let username = 


// // if(condition1){
//     // executes if the condtion1 is truthy
// // }else if(condition 2){
//     // executes if condition2 is truthy
// // }

// // if(condition1){

// // }else{
//     // for all other condition except condition1
// // }


// if(username || 'placeholder'){

// }else{

// }


if([]) console.log('A')
if([].length) console.log("B");
if({}) console.log('C')


console.log(
    (false&&true) || ( (true && false) || true)
)

console.log(!!((null || undefined) && ('' || 0)))




console.log(0 || 100);  //100 b/c 0 is falsy
console.log(0 ?? 100);  //0 
console.log(null || 'default'); //
console.log(null ?? 'default');
console.log(undefined || 'fallback');
console.log(undefined ?? 'fallback');
console.log('' || 'empty');
console.log('' ?? 'empty');

// ?? nullish coersion operatator
// operand1 ?? operand2
// it will return operand2 only and only if operand1 is null or undefined