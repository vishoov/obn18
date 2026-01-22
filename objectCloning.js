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

// console.log(deepCopy)


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

// console.log(spreadClone)


// Object.assign()

//this Object.assign method copies all enumerable properties from source and add them to the target
// Object.assign(target, source1, source2, source3)

const clonedObject = Object.assign({}, original)

// const obj1 = {a:1, b:2}
// const obj2 = {c:3, d:4}
// const obj3 = {e:5, f:6}

// const newObj = Object.assign({}, obj1, obj2, obj3)

// console.log(newObj)


// console.log(clonedObject)



// Shallow copy 

// using a loop

const circle = {radius:10, color:'red'}

const anotherCircle = {}

for(let key in circle){
    anotherCircle[key] = circle[key]
}


// Deep Copy

//will not have the references shared
// a new object will be created and the properties will be stored inside it 

const deepCopy1 = structuredClone(circle)

const shallowCopy1 = {...circle}


if(shallowCopy1===circle){
    console.log("Shallow")
}else{
    console.log("deep")
}



console.log("original", original)

// console.log("shallow", shallowCopy1)

console.log("deep", deepCopy1)



// JSON method


// stringify 
// parse

const copy = JSON.parse(JSON.stringify(original))
copy.address.city="Mumbai"
console.log(original)
console.log(copy)


const info = {
    name:"abc",
    age:Infinity, 
    status:{
        verified:false,
        calculate:function(){console.log("this is a function")},
        undef:undefined
    }
}

// undefined, function are INVALID to be stored in a string that is why they are missed in this method
// NaN and infinity are converted to null

let cloneInfo = JSON.parse(JSON.stringify(info))
// console.log(cloneInfo)



function deepCloneFunc(object){
    //return value, we define it on the top, because throughout the function we will be modifying it
    let clone = Object.assign({}, object);
    //this will give us a shllow copy 
    // top-level properties 
// Object.keys(clone) ->[a, b, c]
   const keys = Object.keys(clone)
   keys.forEach(key=>{
    if(typeof object[key]=='object'){
        clone[key]=deepCloneFunc(object[key])
    } else{
         clone[key]=object[key]
    }
   })
   return clone;
}
const obj=  {
    a:"string",
    b:10,
    c:{
        d:1,
        e:5,
        f:{
            g:85686
        }
    }
}

console.log("deepcloneFunc", deepCloneFunc(obj))

// const shallowobj = {
//     a:"String",
//     b:10,
//     c:referenceShared
// }


