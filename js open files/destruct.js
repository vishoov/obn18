const person = {
    firstName:"John",
    lastName:"Singh",
    age:50
}

// es5 way of extracting information
// const firstName = person.firstName
// console.log(firstName)

// Destructuring (ES6)
// const {
//     firstName: fN,
//     lastName
// } = person

const {
    firstName = "ABC",
    lastName
} = person
// console.log(firstName)
// console.log(fN)


// const [firstName, lastName ] = person


const field = "firstName"

console.log(person[field])


