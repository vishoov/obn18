// Function Types

// 1.function declaration using function keyword

function greet(name){
    console.log(`Hello, ${name}`)
}

greet("Bro")


// Function Expression
// assigning a function to a variable 

const multiply = function(a, b){
    return a*b
}


// Arrow Functions 

const add = (a,b)=> a+b;

// concise syntax
// simple operations
// instant execution



// Immediately invoked function expressions (IIFE)

(function(){
    console.log('this will run now!')
})();

(()=>{
    console.log('Arrow IIFE')
})()
// (functon body)()


// higher order function 

function higherOrder(callback){
    console.log("higher order function")
    callback()
}

const callback = ()=>{
    console.log("i am callback")
}


higherOrder(()=>{
    console.log("i am callback")
})

higherOrder(()=>{
    
})


function iife(){

}

iife()


//async functions 

const getData = async  () =>{
    const data = await fetch()
}



const employees = [
    { name: 'Alice', age: 30, salary: 50000 },
    { name: 'Bob', age: 25, salary: 60000 },
    { name: 'Charlie', age: 25, salary: 55000 }
  ];
  // Sort by age ascending, then salary descending

  
const newemployees = employees.sort((a,b)=>{
    if(a.age>b.age) return 1

    return b.salary - a.salary
})

console.log(newemployees)
