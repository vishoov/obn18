const arr1 = [1,2,3]

const arr2 = [...arr1, 4, 5];

console.log(arr2)

// SPREAD operator expands arrays (iterables) into individual elements. it works on array literals, function calls, and objects literals

// for merging or copying the arrays 

// Function calls
// pass array elements as individual argument

const numbers = [1,2,3,4];

console.log(Math.max(...numbers))

// Object operations

const car = {
    make:"Toyota", 
    model:"Fortuner",
    specs:{
        details:{
            information:{
                data:{
                    info:{
                        sound:"vroom vroom"
                    }
                }
            }
        }
    }
}

const updatedCar = {
    ...car,
    color:"red"
}

console.log(updatedCar)

//for objects
// spread can be used for copying or merging the objects
// it creates shallow copies

