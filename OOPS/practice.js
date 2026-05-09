// - Create a class smartLamp that simulates a smart lamp

// Requirements:
// The lamp should have:
class smartLamp{
    // A private property #isOn (true/false)
    #isOn
    // A private property #brightness (0 to 100)
    #brightness

    constructor(){
        this.#isOn=false;
        this.#brightness = 0;
    }



// Methods:

// turnOn() → turns the lamp on
turnOn(){
    if(this.#isOn==false){
    this.#isOn = true;
    console.log('Turned the lamp on')
    }else{
        console.log('lamp is already on!')
    }
}
// turnOff() → turns the lamp off
turnOff(){
    if(this.#isOn==true){
    this.#isOn = false;
    console.log('Turned the lamp off')
    }else{
        console.log('lamp is already off!')
    }
}

// setBrightness(value) → sets brightness (only if lamp is ON, and value is between 0–100)
setBrightness(value){

    if(!this.#isOn){
        console.log('Turn on the lamp first');
        return;
    }

    if(value>=0 && value<=100){
        this.#brightness = value;
        console.log('Brightness has been set to ', value);
    }else{
        console.log('Invalid Value, Brightness should be between 0-100')
    }
}


// getStatus() → prints whether the lamp is ON/OFF and its brightness
getStatus(){
    let onoff = this.#isOn?'ON':'OFF';
    let brightness = this.#brightness;
    console.log(`Lamp is ${onoff} and the brightness: ${brightness}`)
}
}

const newLamp = new smartLamp();

console.log(newLamp);

newLamp.turnOn();
newLamp.turnOn();

newLamp.setBrightness(59)
newLamp.getStatus();