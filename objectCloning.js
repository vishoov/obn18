const roopansh={
    name:"xyz",
    age:0,
    phone:100,
    address:{
        line1: "123, somehwhere",
        line2:"on earth",
        pincode:100007,
        city:"Delhi",
        coordinates:{
            lat:396596496,
            long:495495945,
            day:{
                sun:39696,
                moon:936964
            }
        }
    }
}

const shallowCopy = roopansh

// console.log(shallowCopy)

const deepCopy = JSON.parse(JSON.stringify(roopansh))

console.log(deepCopy)


// Object Cloning means creating copies of objects, it helps us in duplicating the data without affecting the original one. 
// there are 2 types of cloning based on certain factors 
// 1. shallow copy
// 2. deep copy

// Shallow copy vs deep copy

// Shallow copy creates a new object that copies the top-level properties but maintains references to nested objects 
// this means modifications to nested objects in the shallow copy will also affect the original object

// Deep copy creates a complete independant copy of ALL PROPERTIES and NESTED OBJECTS, ensuring changes to the duplicate DO NOT AFFECT THE ORIGINAL IN ANY WAY


// property         shallow                         deep
// scope            copies only top level           copies all levels, including nested data
// references       nested objects are referred to  all references are independant
                    // original object
// performance      faster and lightweight          slower because of nesting 
// use cases        flat or less nested obejcts     deeply nested objects or immutable data


// Shallow copy methods

// const duplicate = original 

// spread operator 

const original = {
    name:"police",
    age:0,
    address:{
        city:"nyc",
        state:{
            mayor:"mamdani",
            song:{
                name:"dhoom",
                movie:"dhoom"
            }
        }
    }
}


const spreadClone = {...original}

console.log(spreadClone)


// Object.assign()

const clonedObject = Object.assign({}, original)

console.log(clonedObject)


// Deep Copy

