// String methods for accessing values

// indexof()

const text = "Hello world, welcome to the world of world where the world is a world"

// indexof(searchValue) it returns the first occcurence of the searchValue inside the string


//the starting index will confine the array from 0 to startIndex

console.log(text.indexOf("world", 29))
// console.log(text.indexOf("World"))

// find all the occurences of all occurences of a word using indexOf
console.log(text.lastIndexOf('world', 50))


// returns -1  if the substirng is not found
// case sensitive search
// lastIndexof searching from END to BEGINNING



// includes() //boolean 
const message = "acciojob is fun"

console.log(message.includes('fun', 100))


const email ="abc@googlecom"

if(email.includes("@") && email.includes(".")){
    console.log("Valid email")
}else{
    console.log("Invalidemail")
}




const username = "best.player001"