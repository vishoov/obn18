// Javascript arrays are dynamic and ordered collections of data that can store multiple values of ANY TYPE
// unlike compiler based languaged, javascript can store mixed data types

const array  = [1, "Two", false, [1,2,3], {name:"ABC"}]

console.log(array[-1])


// Declaration Methods of arrays

// 1. using array literal 
const array1 = [1,2,3,4];

// using array constructor (new keyword) (object oriented prog way)
const number = new Array(1,2,3)

// presized arrays 
const sizedarray = new Array(5)


// Best practies 
// 1. always prefer array literals instead of new Array() 
// 2. declare arrays with const to prevent reassignment 
// 3. always use descriptive PLURAL name : users, products, scores etc 

const arrayy = [1,2,3]
// arrayy = [2,3,4]


console.log(arrayy.length)


const numbers = [1,2,3,4,5];

const doubled = numbers.map((num)=>{
    return num*2
})

console.log(doubled)


// Ways to access elements from arrays 

const colors = ["red", "green", "blue"];

// literal
console.log(colors[0])

// length 
console.log(colors.length)


// last element
console.log(colors[colors.length-1])


//  array.at(index)

console.log(colors.at(2))

//negative indices in .at method return elements from the end or right edge

console.log(colors.at(-2))

const newArray = new Array(5)
console.log(newArray[10])


//Modify element
colors[1]="line"
console.log(colors)

// Best practices
// 1. for positive indices, use literals and for cleaner negative indices use at 
// 2. always check the index before using it 
//  3. in some methods -1 index is considered as a 'not found' flag 


console.log(colors[-10])

function Arrayat(array, index){
    //edge case: array is empty -> return undefined
    if(array.length===0) return undefined;
    
    //positive index -> 0 to length-1 -> element else undefined
    if(index>=0){
        if(index<array.length){
            return array[index]
        }else{
            return undefined;
        }
    }
    //negative index -> -1 to -length -> element from last else undefined
    else{
        const newIndex = array.length+index;

        if(newIndex>=0 && newIndex<=array.length){
            return array[newIndex]
        }else{
            return undefined
        }

    }
}



const veggies = ["tomato", "potato", "onion", "carrot"]

console.log(Arrayat(veggies, -10))


const sample = [1,2,3,4,5]

console.log(sample.length)


