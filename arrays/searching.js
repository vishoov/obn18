// // //Searching Methods

// // const users = [
// //     {id:1, name:"John"},
// //     {id:2, name:"James"},
// //     {id:3, name:"Jack"},
// //     {id:4, name:"Jake"},
// // ]

// // // find() -> this outputs the element that matches the condition
// // // this only returns the first element that matches the condition 
// // const user = users.find(u=> u.id===2)

// // console.log(user)


// // // findIndex() -> returns the index of the first occurance of the element that satisfies the given condition 

// // const index = users.findIndex(user=> user.id === 3)
// // console.log(index)


// // // indexOf() -> returns the first index of the specified value inside the array 
// // // it returns -1 when the element you are looking for doesnt exist in the array
// // const phones = [ 'oppo', 'vivo', 'samsung']

// // console.log(phones.indexOf('apple'))

// // //  includes() => check if an element exists in array or not
// // // output -> boolean value

// // console.log(phones.includes('apple'))


// // // some() -> 


// // // const hasEven = numbers.some(num=> num%2===0);
// // // console.log(hasEven)

// // // // every()-> tests if ALL the elements pass a certain conditions

// // // const allEven = numbers.every(num=> num%2===0);

// // // console.log(allEven)




// // let numbers = [1,2,3,4,5]
// // const result1 = numbers.find(num => num > 2);
// // const result2 = numbers.filter(num => num > 2);

// // console.log(result1) //1
// // console.log(result2) //3,4,5



// const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];
// const result = users.find(u => u.id === 5);

// if (result) {
//     console.log(result.name);
// } else {
//     console.log('Not found');
// }


// const arr = [1, 2, NaN, 4];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));


// // the indexOF method uses strict comparison (===) which fails for NaN (NaN===NaN is false)

const users = [{id: 1}, {id: 2}];
const user = {id: 1};

console.log(users.indexOf(user));
console.log(users.indexOf({id: 1}));
//because indexOf uses reference equality, even though the objects have same properties, they are different in memory


const empty = [];
console.log(empty.some(x => x > 0));
console.log(empty.every(x => x > 0));



function some(array, value){
    let result = false;

    for(let i=0; i<array.length; i++){
        if(array[i]===value){
            result =true
        }
    }
    return result;
}


function every(array, value){
    let result = true;

    for(let i=0; i<array.length; i++){
        if(array[i]!==value){
            result = false
        }
    }
    return result;
}