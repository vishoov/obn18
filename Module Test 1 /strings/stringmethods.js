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

// roopaansh.sethi@google.co.in


// startsWith

const url = "https://localhost:3000"

function checkSecurity(url){
    if(url.startsWith('https')){
        console.log("This is a secure url")
    } else if(url.startsWith('http')){
        console.log("This is not secure")
    } else{
        console.log("this is not a valid url")
    }
}


checkSecurity(url)



const file= "document.txt"
// endsWith



function checkFormat(file){
    if(file.endsWith('.docx') || file.endsWith('.pdf') || file.endsWith('.txt')){
        console.log("This is a document")
    } else if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.webp')){
        console.log("This is an image")
    }else{
        console.log("Unknown file")
    }
}

checkFormat(file)


// slice()
// this extracts a sections of a string and returns it as a new string without modifying the original 

// string.slice(startIndex, endIndex)
// 
const line = "Ronaldo or Messi"

console.log(line.slice(0, 7))

console.log(line.slice(8))
// console.log(line.slice())


console.log(line.slice(-5))

console.log(line.slice(-16, -9))
console.log(line.slice(0, 7))



const emailAdd= "userererererereer@exxxxxxample.com";

//extract the username
console.log(emailAdd.slice(0, emailAdd.indexOf('@')))
// extract the domain
console.log(emailAdd.slice(emailAdd.indexOf('@')+1))

const details= emailAdd.split('@');

console.log(details[0])
console.log(details[1])


// endIndex is always EXCLUSIVE (NOT INCLUDED IN RESULT)
// negative indices count from the end of the stirng
// if startIndex>= endIndex return empty string 
// strings are immutable so methods dont change them 


console.log(emailAdd.slice(10, 4))



// substring()
// substr deprecated

const sample = "JavaScript"

console.log(sample.substring(4, 6)) //startIndex, endIndex
console.log(sample.substring(4)) //startIndex

console.log(sample.substring(-6)); //substring does not support negative indices

// substring of the string 0 - length 


console.log(sample.substring(5, 0))

//if startIndex>endIndex -> substring will swap these to make them a valid substring 

// substring and slice both work same for positive indices where start<end

console.log(sample.substring(0, 100))

// slice is preferred because of consistency and negative index support 


// toUpperCase() and toLowerCase()

const mess = "Hello bro"


console.log(mess.toUpperCase())
console.log(mess.toLowerCase())


// "hello world" -> HELLO World 
function titleCase(str){
    return str.toLowerCase().split(" ").map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(" ")
}

console.log(titleCase("HELLO World"))
function titleCase(string) {
    let words = string.split(" ");
    let result = [];
   
  
    for (let word of words) {
      let capitalized =
        word[0].toUpperCase() + word.slice(1);
  
      result.push(capitalized);
  
    }
  
   
  
    return result.join(" ");
  
  }
  
   
  
  console.log(titleCase("hello world"));
  
  
  

//   split(seperator) -> string to array
// join(seperator) -> array to string



const sentence = "Acciojob is fun"

const words= sentence.split(" ")

const sentence2 ="hello_I_am_under_the_water"

console.log(sentence2.split("_"))
  
console.log(sentence2.split("_").join(" ")) 
  
//   replace() and replaceAll()

// replace(searchValue, replaceValue) -> replaces only the first instance of searchValue with replaceValue
// replaceAll(searchValue, replaceValue)-> replaces ALL instances of searchValue with replaceValue


const text2 = "i love cats. cats are great. cats are cute."

console.log(text2.replace("cats", "dogs"))
  
console.log(text2.replaceAll("cats", "dogs"))
  
  

