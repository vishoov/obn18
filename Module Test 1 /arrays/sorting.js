
// sort()

let numbers = [5,4,3,6,7,9,2]

//ascending order
console.log(numbers.sort((a,b)=>a-b));

//descending order
// console.log(numbers.sort((a,b)=>b-a));
const reversed = numbers.sort((a, b)=> a-b);

const alphabets = ['a', 'z', 'e', 'g']

console.log(
    alphabets.sort(
        (a,b)=>{
            if(a<b) return -1;
            if(a>b) return 1;
            return 0;
        }
    )
)

console.log(alphabets.sort())


const employees = [
    { name: "John", dept: "IT", salary: 50000 },
    { name: "Alice", dept: "HR", salary: 55000 },
    { name: "Bob", dept: "IT", salary: 60000 },
    { name: "Carol", dept: "HR", salary: 48000 }
  ];
// alice, john, bob, carol
// alice, john, bob, carol
// alice, john, carol, bob
// alice, john, carol, bob
//alice, carol, john, bob
// carol, alice, john, bob


  //sort this array on basis of department first then salary 
console.log(
    employees.sort(
        (a,b)=>{
            //first on the basis of department
            if(a.dept<b.dept) return 1;
            if(a.dept>b.dept) return -1;

            return b.salary - a.salary
        }
    )
)


const products = [
    {
        name:"B",
        price:30
    },{
        name:'A', 
        price:20
    },
    {
        name:"C",
        price:10
    }
]


console.log(products.sort((a,b)=>a.price-b.price))

// reverse()
console.log(
    reversed.reverse()
)


const mixed = [5, null, 2, undefined, 8, 1, null];

console.log(
    mixed.sort(
        (a,b)=>{

        if(a>b) return 1

        return a-b

        }
    )
)

//numbers-> null -> undefined

// Array creation and manipulation

const fruits = ['apple', 'banana', 'orange', 'grape', 'melon']

// slice()
const three = fruits.slice(0, 2)
// first argument in slice is INCLUSIVE
//second argument in slice is EXCLUSIVE
// if the argument is negative -> so it will start from the end and whwnever you use any negative index dont use second argument
console.log(three)
const last2 = fruits.slice(-2, 0)
console.log(last2)

//shallow copy
const copy = fruits.slice()

console.log(copy)




// splice() removes the elements from array 
//first arg is starting index
// second arg is COUNT


// const spliced = fruits.splice(2, 1)
// console.log(spliced)
console.log(fruits)

const replaced = fruits.splice(0, 20, "pineapple", "pomegrenate")


//a,b 
// dynamic 
// function Customsplice(array, start, deleteCount, ...itemsToAdd){
//     if(start<0){
//         start = Math.max(array.length + start, 0)
//     }
// }

// Customsplice([1,2,3,4,5], 0, 2, 10,20,30,40,50)

console.log(fruits)

// concat
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

arr1= arr1.concat(arr2)
console.log(arr1)

// join
const message = ["Javascript", "is", "fun"]

let joinedMessage = message.join(" ")
console.log(joinedMessage)

let another = "Hello how are you"
const anotherArray = another.split("")
console.log(anotherArray)

console.log(another.split(" ").length)

// shift 
const sports = ['cricket', 'football', 'baseball', 'basketball', 'volleyball']
console.log(
    sports.splice(
        2, 1
    )
)
let shifted = sports.shift();

console.log(sports)
console.log(shifted)

// unshift

sports.unshift("Table Tennis")
console.log(sports)
// fill

const prices = [10, 20, 500, 1000]

prices.fill(10)
console.log(prices)
// push
let nums = [1,2]
nums.push(3)

console.log(nums)
// pop

const popped = nums.pop()
console.log(nums)
console.log(popped)


// push_back
// nums.push_back(10)
// console.log(nums)


// pop_back






function customSplice(array, start, deleteCount, ...itemsToAdd) {
    // Handle negative start index
    if (start < 0) {
      start = Math.max(array.length + start, 0);
    } else {
      start = Math.min(start, array.length);
    }
    
    // Handle deleteCount
    if (deleteCount === undefined) {
      deleteCount = array.length - start;
    } else {
      deleteCount = Math.max(0, Math.min(deleteCount, array.length - start));
    }
    
    // Store removed elements
    const removedElements = [];
    for (let i = 0; i < deleteCount; i++) {
      removedElements.push(array[start + i]);
    }
    
    // Calculate new array length
    const itemsToAddCount = itemsToAdd.length;
    const newLength = array.length - deleteCount + itemsToAddCount;
    
    // If adding more items than deleting, shift elements right
    if (itemsToAddCount > deleteCount) {
      const shiftAmount = itemsToAddCount - deleteCount;
      for (let i = array.length - 1; i >= start + deleteCount; i--) {
        array[i + shiftAmount] = array[i];
      }
    }
    
    // If deleting more items than adding, shift elements left
    if (deleteCount > itemsToAddCount) {
      const shiftAmount = deleteCount - itemsToAddCount;
      for (let i = start + deleteCount; i < array.length; i++) {
        array[i - shiftAmount] = array[i];
      }
    }
    
    // Insert new items
    for (let i = 0; i < itemsToAddCount; i++) {
      array[start + i] = itemsToAdd[i];
    }
    
    // Adjust array length
    array.length = newLength;
    
    return removedElements;
  }
  