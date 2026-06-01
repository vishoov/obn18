setTimeout(()=>{
    console.log("longest function")
}, 5000)


// async 
function timer(){

setTimeout(()=>{
    console.log("Timeout output")
}, 0)
}

timer();
//sync
console.log("1");
console.log("2")


//sync
console.log("3")