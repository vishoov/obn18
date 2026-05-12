class Stack{
    constructor(){
        this.item = [];
    }
    push(items){
        //push the elements into the array
       this.item.push(items);

    }
    pop(){
        //print and remove the element
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.item.pop();

    }
    isEmpty(){
        //check whether the stack is empty or not
        return this.item.length===0;
    }
    peek(){
        //returns the topmost element
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        return this.item[this.item.length-1];

    }
    clear(){
        //empties the stack
        this.item = [];

    }
    print(){
        //print the stack elements
        console.log(this.item.join(" "));
    }
}

const st = new Stack();
st.push(1)
st.push(2)
st.push(4)
st.print();
st.push(7);
st.print()
st.pop();



// Create a base class Vehicle with:
// brand
// speed
// Add methods:
// accelerate(amount)
// brake(amount)
// getInfo()
// Then create a child class ElectricCar that:
// extends Vehicle
// has an extra property batteryLevel
// has a method charge(amount)
// overrides getInfo() to include battery level
// Create one Vehicle and one ElectricCar, use their methods, and print the results.


class Car{
    #speed
    constructor(brand, speed){
        this.brand = brand;
        this.#speed = speed;
    }
    
    accelerate(amt){
        this.#speed+=amt;
    }

    setSpeed(amount){
        this.#speed = amount;
    }

    brake(amt){
        this.#speed-=amt;
    }

    getInfo(){  
        console.log(`${this.brand}'s vehicle with speed ${this.#speed}`)
    }
}

class ElectricCar extends Car{
    constructor(brand, batteryLevel){
        super(brand);
        this.batteryLevel=batteryLevel;
    }

    setSpeedChild(amount){
         this.setSpeed(amount);
    }

    charge(amt){
        this.batteryLevel+=amt
    }

    getSpeed(){
        return this.speed
    }

    getInfo(){
        console.log(`${this.brand}, ${this.getSpeed()}, ${this.batteryLevel}`)
    }
}



const tirri = new ElectricCar('tirri', 0);
tirri.charge(50);
tirri.setSpeedChild(10)
tirri.getInfo();
tirri.getSpeed()



