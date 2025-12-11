// Transformation

//map 
const numbers = [1,2,3,4,5];

//dublkes-> 

const doubles = numbers.map(number=>{ return number*2})

console.log(doubles)



const users = [
    {
        name:"Cyril",
        gender:"Male"
    },
    {
        name:"Aradhya",
        gender:"Female"
    }
]

const userNames = users.map(user=> user.name)

console.log(userNames)



// FILTER will create a new array with elements that PASS THE CONDITION

const numbers2 = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers2.filter(num => num % 2 ===0 )

console.log(evenNumbers)



// REDUCE -> single value output 

const sum = numbers2.reduce((accumulator, current)=>accumulator+current, 0)
//reduce(callbackFn, Accumulator's Initial Value)
// callbackFn -> accumulator, 
console.log(sum)

//maximum value
let numz = [2,7,4,9,3,7,6]

const max = numz.reduce((max, current)=>current>max?current:max)



// flat() -> flattens nested arrays

const nestedArray = [
    [1,2,3,4],
    [1,2,3],
    [1,2]
]

const flattened = nestedArray.flat(0);

console.log(flattened)


const deeplyNested = [1, [2, [3, 4]]]

const fullyFlat = deeplyNested.flat(1)

console.log(fullyFlat)





// SEARCHING METHODS

// find() returns the FIRST ELEMENT that satisfied the condition
const userss = [
    {
        id:1,
        name:"ABC"
    },
    {
        id:2,
        name:"CDE"
    },
    {
        id:3,
        name:"XYZ"
    }
]


// find the user with id 2
const user = userss.find(u=> u.id=== 10)
console.log(user)


// findIndex() -> returns the index of first matching element
const numss = [10, 20, 30, 40, 50]

const index = numss.findIndex(num => num > 125)

console.log(index)




const empty = [];
const result = empty.reduce((acc, curr) => acc + curr);
console.log(result);
