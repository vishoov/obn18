function greet(name, callback){
    console.log("Hello, " + name);
    callback();
}


function greetingLine(){
    console.log("Nice to meet you!")
}


greet("nitin", greetingLine);

// 1. greet("nitin", greetingLine)  is called
// 2. greet function -> hello nitin 
// 3. callback() -> greetingLine()
// 4. console nice to meet you 

// this is a synchronouse example
// this is sequential
// this is interdependant 



console.log("Aman");


setTimeout(function(){
    console.log("Reached class")
}, 2000);

console.log("Class Started");


//why this order?
// sync-> setTImeout goes to event loop -> executed after timeout
// javascript doesnt wait for anyone 

// setTimeout
// sewtTimeout -> callback, timeoutDuration -> javascript scheduled the callback function
// to run later, then continued executing the rest of the code 

function doTask(callback){
    console.log("pehle ye karle")
    callback();
}

function baadme(){
    console.log("This will happen after the task is done")
}

doTask(baadme);


