// function logMessage(){
//     console.log("Function chal gaya!")
// }

// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();


// Throttle -> allow the function to run at most once per a given interval 
// interbval = 5000ms


// function log(){
//     console.log("Log something")
// }

// log();

// 1. simplest with a global flag

// let canRun = true;

// function log(){
//     if(!canRun){
//         return;
//     }
//     console.log('Hello there!');
//     canRun=false;
    
// }
// log();
// log();
// log();


// 2. Allow repeated runs 
// after running once, block further calls 
// after some time, it should allow running again 



// let canRun = true;
// function log(){
//     if(!canRun){
//         return;
//     }
//     console.log('Hello there!');
//     canRun=false;


//     setTimeout(()=>{
//         canRun = true;
//     }, 500)
    
// }
// log();
// log();
// log();

// setTimeout(()=>{
//     log();
// }, 600);



// 3. create a 'throttle' function 

function throttle(cb, delay){
    let canRun = true;

    return function(){
        if(!canRun) return;

        cb();
        canRun = false;

        setTimeout(()=>{
            canRun = true;
        }, delay)
    }
}

function logSomething(){
    console.log("Logged something using throttle")
}

const throttledLogSomething = throttle(logSomething, 10000);

// throttledLogSomething();
// throttledLogSomething();
// throttledLogSomething();

// Reusable throttle function 
// Security is massively increased
// throttle created a closure to avoid global variable 

// Cons ? 




// 4. Use timestamps instead of flags 

function throttleTimeStamp(func, delay){
    let lastTime = 0;

    return function(...args){
        const now = Date.now();
        if(now-lastTime >= delay){
            lastTime = now;
            func.apply(this, args); //this -> context 
        }

    }
}

function greet(name){
    console.log(`Aur bhai ${name}, how are you?`)
}

const throttledLogScroll = throttleTimeStamp(greet, 1000);

throttledLogScroll("Aman");
throttledLogScroll("Aman");
throttledLogScroll("Aman");
throttledLogScroll("Aman");


// 5. final boss implementation 

