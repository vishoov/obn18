// setInterval: continuous execution patterns 
// const id = setInterval(callback, delayMs, ...args)


// setInterval calls a function repeatedly, roughly after every delayMs seconds
const id = setInterval(()=>{
    console.log("money money");
    console.log(count++);
}, 1000, count=0);



setTimeout(()=>{
    clearInterval(id)
}, 10000)