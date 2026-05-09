// Whats inheritance : a class can extend another class so that the objects created from that class get ALL THE PARENT's BEHAVIOUR and can add of modify their own unique properties or methods 

// this is also called 'is-a' relationship 

// dog is a animal 
// cat is a animal 

// digital product is a product
// physical product is a product 

// class Child extends Parent : this is declaration of a child class that will inherit the parent class 
// super(name) : helps in passing the arguments to the inherited properties 

// NOTE: whenever you are using any inheritance always declare the super class on top of the constructor of the child class 


// Constructor and super 
// super is used for passing arguments to the parent class
// if you dont define a constructor in the child, Javascript automatically adds one that calls
// super(...arguments) itself.


class Vehicle{
    constructor(brand){
        this.brand=brand;
    }

    start(){
        console.log(`${this.brand} starts!`)
    }
}

class Car extends Vehicle{

}

const myCar = new Car('Toyota');
console.log(myCar)
myCar.start();



// output : A. error B. undefined C. 'Toyota Starts' 


// Animal 
    // - Name 
    // - age

// Dog
    // - Name
    // - Age
    // - breed

// Cat
    // - Name
    // - Age
    // - color

    class Animal{
        constructor(name, age){
            this.name = name
            this.age = age
        }
    }

    class Dog extends Animal{
        constructor(name,age, breed){
            // this.name = name
            // this.age = age
            // super keyword calls the parent constructor 
            super(name, age) //this is the super keyword
            this.breed = breed;
        }

    }

    class Cat extends Animal{
        constructor(name, age, color){
            super(name, age);
            this.color= color;
        }

        method(){
            console.log('hello')
        }
    }

    
    const lab = new Dog('labrador', 20, 'dfohdfoh');
    console.log(lab);

    const cat = new Cat('billa', 2, 'cat breed');
    console.log(cat instanceof Cat)
    console.log(cat instanceof Animal)
    console.log(cat);


// Product

//properties= name, price, stock
// methods = isInStock , getPrice

// digital product -> download link 
// getProduct -> this is the download link : ${downloadlink}

// physical product -> weight 
// Deliver -> your prodyct named : ${this.name} will charge ${this.weight}*5 rupees 

//const ebook = new DigitalProduct(dikdigidgd9i)

// ebook -> console.log(ebook instanceof Product)

// class Parent1{}

// class Parent2 extends Parent1{}

// const obj = new Parent2{}


// -------------------------BIND-------------------------
// const product ={ name:'iphone'}

// function getName(){
//     console.log(`this is the ${this.name}`)
// }

// //bind always is used in terms of context 

// const getiPhoneName = getName.bind(product);


// getiPhoneName();