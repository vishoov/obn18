// Notations hgelp us in reading and writing object properties

// Dot notation
const car = {
    brand:"Tesla"
}

console.log(car.brand)
car.year = 2024
console.log(car)

// this dot notation way fails when the key has spaces, hyphens, or starts with a number or is dybamic 

// Bracket Notation

const car2 = {
    "brand-name":"Tesla"
}

// console.log(car2.brand-name)
console.log(car2["brand-name"])

// when to use bracket notation 
// key has spaces, special symbols, hyphens, numbers
// key is stored in a variable or is computed at runtime 

const obj = {
    name:"Sam"
}

//this is coming from user input 
// function getProperty(key){
//     console.log(obj[key])
// }


const key = "name"
console.log(obj[key])
console.log(obj.key)
// console.log(obj["name"])
// getProperty("name")


