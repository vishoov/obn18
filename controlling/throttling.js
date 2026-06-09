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

function throttle(func, interval){
    let time = 0;

    return function(){
        const now = Date.now();
        if(now-time>=interval){
        time = now;
        func();      
        }  

    }
};


// const throttledLog = throttle(logMessage, 1000);

// throttledLog();
// throttledLog();
// throttledLog();



let throttleTime = 0;

function logMessage(){
    let now = Date.now();
    if(now-throttleTime>1000){
        throttleTime=now;
        console.log("Hello bhai")
    }
}

logMessage()
logMessage()
logMessage()
logMessage()