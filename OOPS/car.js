class Vehicle{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    
    accelerate(amount){
        this.speed = this.speed + amount;
        console.log(`Your current speed is: ${this.speed}`);
    }
    
    brake(amount){
        this.speed = this.speed - amount;
        console.log(`Your current speed is: ${this.speed}`);
    }
    
    getInfo(){
        console.log(`Your vehicle brand is ${this.brand} and your speed ${this.speed}`)
    }
}



const car = new Vehicle('Toyota', 20);

car.accelerate(30);

class ElectricCar extends Vehicle{
    constructor(brand, speed, batteryLevel){
        super(brand, speed);
        this.batteryLevel = batteryLevel;
    }
    
    charge(amount){
        this.batteryLevel = this.batteryLevel + amount;
    }
    
    getInfo(){
        console.log(`Your vehicle brand is ${this.brand}, your speed is ${this.speed} and your battery level is ${this.batteryLevel}`);
    }
    
}



const electric = new ElectricCar('Tesla', 20, 60);

electric.getInfo();