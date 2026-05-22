class Customer {
    #panCard;

    constructor(name, age, panCard) {
        this.name = name;
        this.age = age;
        this.#panCard = panCard;
    }

    getPanCard() {
        return this.#panCard;
    }
}

const customer = new Customer(
    "John",
    25,
    "ABCDE1234F"
);

const customer2 = new Customer(
    'johnnu',
    20,
    "40479fbofh"
)

console.log(customer.name);          
console.log(customer.age);           
console.log(customer.getPanCard());  

console.log(Object.keys(customer));


for (let key in customer) {
    console.log(key);
}




customer.panCard = "XYZ"; 
console.log(customer.getPanCard());
console.log(customer)
console.log(customer2)