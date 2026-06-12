function User(name){
    this.name = name;
    this.greetInfo = `Hello, I am ${this.name}`
    this.greet = function(){
        return `Hello, I am ${this.name}`;
    }
}

// This is prototype
User.prototype.farewell = function(){
    console.log(`Goodbye, ${this.name}`)
}

const aman = User('aman');
const nitin = new User('nitin');
// ...1000 users

// What could be the possible problem at scale!?

console.log(aman)
console.log(nitin)
nitin.farewell();

// Prototype -> is a special property that helps us whenever we create objects using a constructor in making the code efficient, this does this by make the prototype function usable by the object through the constructor function 

// Why is prototype so useful? 
// instead of creating a new copy of a method for every instance, you can add it once to the prototype and all instances derived from that constructor will be able to call it 


// Prototype chaining 
// 1. object-> dog.name 
// 2. object's prototype -> dog.speak() -> dog.prototype.speak
// 3. Object.prototype -> call 
// 4. undefined 



// animal function name dog, breed, age -> this.sound -> {name} makes bark sound 
// attack prototype -> {name} bites!!!!! 

function Animal(name, breed, age){
    this.name = name;
    this.breed=breed;
    this.age = age

    this.sound = function(){
        console.log(`${this.name}, barks!!!!`)
    }
}

Animal.prototype.attack= function(){
    console.log(`${this.name}, bites!!!`)
}

const dog = new Animal('dog', 'lab', 3)

console.log(dog)
dog.sound()
dog.attack()