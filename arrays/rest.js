function add(a,b,c, ...numbers){
    const sum = numbers.reduce((total, num)=>total+num, 0);
    return a+b+c+sum;
}

console.log(add(2,3,4, 8,9,10,11,12,12))

// Function parameters 
// the REST operator in function params allows functions to accept an INDEFINITE number of arguments by gathering them into a single array
// this REST operator must be the last parameter in the function declaration
// useful for cases when number of arguments is unknnown 


// Array Destructuring 

//REST operator captures the remaining elements after extracting the specific ones
// REST parameter collects leftover elements into a new array


const arr = [1,2,3,4,5,6]

const [first, second, ...rest] = arr;

console.log(first)
console.log(second)
console.log(rest)


const todos =[
    {
        id:1,
        title:"Water the plants",
        priority:"high"
    }    
]    

function addTodo(input, newTodo){
    // todos.push(newTodo)
    input = [...input, newTodo]
    return input
}    


console.log(addTodo(todos, {id:2, title:"go to gym", priority:"very high"}))

