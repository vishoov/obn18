// it schedules a function to run once, after a minimum delay


// setTimeout(()=>{
//     console.log("This finally runes after a certain time")
// }, 2000);

// console.log('Runs Immediately');

// Syntac setTimeout 

// const timerId = setTimeout(callback, delayMs, ...args);

// callback -> function to be delayed 
// delayMs:minumum delay in milliseconds 
// ..args : optional arguments passed to the callback;
// timeId: A numeric ID you can use to identify the timeout function 

const id = setTimeout(()=>{
    console.log("This should run....")
}, 3000);

console.log("Timer scheduled");

clearTimeout(id); //clear the scheduled timeout 
console.log("Timer code completed");


// Execution Order: 

// 1. Sync code runs first (in line wise order);
// 2. Sync parts will be sent to callstack to be executed and async or timer functions will be sent to event loop to wait for sync code to complete 
// 3. After the call stack is empty , the event loop pulls the next tast and runs it. 

// Note: Ordering is not guaranteed by time, obly by entry order in the event loop and minimum delay 

// Use Cases: 
// 1. UI transitions: show a success message, show a popup 
// 2. Debouncing user input 
// 3. Delayed navigation (redirecting in 5 seconds...)
// 4. soft animations: delay animation from one to another 

