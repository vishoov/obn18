// Polymorphism lets the code work with different types through a common call that can trigger different behaviour 


// Animal (speak)-> Dog (speak [override]) -> dog 

// Runtime Polymorphism -> whenever a class redefines a method from its parent
// javascript engine this decides at the runtime which version to call based on the object's type


class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal{
    
    speak(){
        console.log('Dog barks.')
    }
}

class Cat extends Animal{
    speak(){
        console.log('Cat meows!')
    }
}

const animal = new Animal('animal');
const dog = new Dog('dog');
const cat = new Cat();



animal.speak();
console.log(animal instanceof Animal)
dog.speak();
console.log(dog instanceof Dog)
cat.speak();

console.log(cat instanceof Cat)


// Shape -> calculateArea(){console.log('no details provided')}

// class rectangle{width, height -> calculateArea (width*height)}
// class Circle {radius -> calculate-> r*r*3.14}
