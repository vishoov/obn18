const pipe = (...fns)=>{
    //values = []
    return (value)=>{
        return fns.reduce((acc, fn)=>fn(acc), value);
    }
};

function abc(message){
    console.log(message)
    message = message + " first function se aya hua text"
    return message;
}

function cde(message){
    console.log(message);

}

const output = pipe(abc, cde)('roopansh');


const initialList = [
    { name: "Laptop", category: "electronics", price: 1000 },
    { name: "Phone", category: "electronics", price: 500 },
    { name: "Tablet", category: "electronics", price: 300 },
    { name: "Headphones", category: "electronics", price: 80 },
    { name: "Book", category: "books", price: 20 },
    { name: "Notebook", category: "books", price: 10 },
    { name: "Shirt", category: "clothing", price: 25 },
    { name: "Watch", category: "electronics", price: 200 }
  ];

  const filterByCategory=(category) => (list)=>{
  return list.filter((item)=>item.category===category);
  
  }

  const filterPrice= (price)=>(list)=>{
    return  list.filter(ele=>ele.price>price);
  }

  const displayItems = () =>(list)=>{
    console.log(list)
    return list;
  }

  const workflow1 = pipe(
    filterByCategory('electronics'),
    filterPrice(100),
    displayItems()
  )
  console.log(workflow1(initialList));




// const nums = [1,2,3,4,5];
// return (value)=>{
// const newval = nums.reduce((acc, fn)=>fn(acc), value);
// }
// console.log(newval)



// // Question 5

// class Customer {
//     #panCard; // private (not accessible or enumerable outside)
  
//     constructor(name, age, panCard) {
//       this.name = name;
//       this.age = age;
//       this.#panCard = panCard; // stored in private field
//     }
  
//     // Optional: controlled getter for panCard
//     getPanCard() {
//       return this.#panCard; // can be read only via this method
//     }
//   }
  
//   // Usage
//   const customer = new Customer("Rahul Sharma", 32, "ABCDE1234F");
  
//   console.log(customer.name);          // "Rahul Sharma"
//   console.log(customer.getPanCard());  // "ABCDE1234F"
  
//   // customer.panCard is not defined, so cannot be modified directly
//   customer.panCard = "NEWVALUE";
//   console.log(customer.getPanCard());  // still "ABCDE1234F"
  
//   console.log(Object.keys(customer));  // ['name', 'age'] – #panCard is not shown
//   for (let key in customer) {
//     console.log(key); // only 'name' and 'age'
//   }