// // String in javascript is a primitive data type that represents textual data consisting of sequence of characters.
// // names, info, address, etc for character based information


// // string literals 
// // single quotes -> ''
// // double quotes -> ""
// // backticks -> ``

// let fruit = 'apple'
// console.log(fruit)

// let country ="India"
// console.log(country)

// let another = `one`
// console.log(another)


// // // Escape characters 

// // // \n -> Newline character this adds a new line in the stirng
// // let text1 = "Hello\nworld"

// // console.log(text1)

// // // Tab Character
// // let text2 = "Name:\tAcciojob"
// // console.log(text2)

// // //Backslash
// // let path = "C:\\Users\\Documents"
// // console.log(path)


// // let quote1 = 'It\'s a beautiful day'
// // console.log(quote1)


// // // Template literals and interpolation

// // // template literals use backticks and support string interpolation using ${} syntac
// // // which allows use to embed variables and expressions directly into strings


// // //Variable Interploation
// // const name = "Acciojob"
// // const age = 5
// // const greeting = `Hello, my name is ${name}, aged ${age}, and I am under the water`
// // console.log(greeting)


// // // Expression interpolation
// // let a =10
// // let b = 20

// // console.log(`the sum of numbers ${a} and ${b} is ${a+b}`)


// // // Call functions in interpolation
// // function getDiscount(price){
// //     return price*0.1;
// // }

// // const price = 100

// // const message = `Original price: ${price}, Discount: ${getDiscount(price)}`;
// // console.log(message)



// const taxRate = 0.1;

// function getPriceLabel(price) {
//   const taxRate = 0.2;

//   function getTotal() {
//     return price + price * taxRate;
//   }

//   const label = `Price: $${price}, Tax: $${price * taxRate}, Total: $${getTotal()}, Global tax: $${price * globalTax}`;
//   return label;
// }

// console.log(getPriceLabel(100));
// var globalTax = 0.05;



// // let str = "Javascript"
// // console.log(str.length)

// console.log("Hello world".length)

// let password ="1234"

// if(password.length<8){
//     console.log("password is too weak")
// }


// // Accessing characters 

// let strr = "Hello world"

// // bracket notation []

// console.log(strr[0])
// console.log(strr[5])

// // charAt()

// console.log(strr.charAt(0))

// console.log(strr.charAt(strr.length-1))
// console.log(strr[strr.length-1])

// console.log(strr.charAt(-2))


// // Immutability 

// let message = "Jello world"

// message[0]="H"
// console.log(message)



// let corrected = "H" + message.slice(1)
// console.log(corrected)


// // String concatenation
// // this + operator joins (concatenises) two or more strings together
// let first = "Hello"
// let second = "World"

// let combined = first+" " + second

// console.log(combined)


// let input = "abcdefg"

// function subarrays(input){
//     let result = []


//     for(let i=0; i<input.length-1; i++){
//         for(let j=i+1; j<input.length; j++){
//             const str = input.slice(i, j)
//             result.push(str)
//         }
//     }
//     return result
// }

// console.log(subarrays(input))



// let str = "JavaScript";

// console.log(str[0]);
// console.log(str["1"]); //string "1" is used as a property key
// console.log(str["01"]); //the property key "01" is a stirng not the number 1
// console.log(str.charAt("2")); 
// console.log(str.charAt(2.9)); //truncating the value and converting it to 2 (not rounded or floor) 
// console.log(str[-1]); //neither do we have a -1 index nor do we have a -1 property key
// console.log(str.charAt(-1)); //negative indices are not supported in charAt


// // for iteration of strings

// let samples = 'this is a sample stirng for javascript';

// // for(let i=0; i< samples.length ; i++){
// // let char = samples[i]
// //   console.log(char)
// // }


// // for...of loop (ES6+)
// for(let sample of samples){
//   console.log(sample)
// }

// let greetz = "Hello world"
// let count =0;
// for(let char of greetz){

//   if(char==="l"){
//     count++;
//   }
// }

// console.log(count)


const input = "hello";
let reversed = "";
let uppercase = "";

for (const char of input) {
  reversed = char + reversed;
  uppercase += char.toUpperCase();
}

console.log(reversed);
console.log(uppercase);
console.log(input);


let str ='abcd'

for(let char of str){
  char = char+'z'
  console.log(char)
}


const products = [
  { 
    id: 1, 
    name: 'Wireless Mouse', 
    price: 29.99, 
    category: 'Electronics',
    inStock: true,
    rating: 4.5 
  },
  { 
    id: 2, 
    name: 'USB-C Cable', 
    price: 12.99, 
    category: 'Electronics',
    inStock: true,
    rating: 4.2 
  },
  { 
    id: 3, 
    name: 'Laptop Stand', 
    price: 45.00, 
    category: 'Accessories',
    inStock: false,
    rating: 4.8 
  },
  { 
    id: 4, 
    name: 'Mechanical Keyboard', 
    price: 89.99, 
    category: 'Electronics',
    inStock: true,
    rating: 4.7 
  },
  { 
    id: 5, 
    name: 'Desk Lamp', 
    price: 34.50, 
    category: 'Accessories',
    inStock: true,
    rating: 4.3 
  }
];


for(let product of products){
    if(product.inStock){
      console.log(`Product ${product.name}, priced at ${product.price} is in stock!`)
    }else{
      console.log(`Product ${product.name}, priced at ${product.price} is out of stock!`)

    }
}