//CALLBACKS 

//qrScan()
// idFind()
// amount
// pin
// initiatepayment 
// processpayment 

// const qr = new Promise(qrScan())-> proxy value -> promise -> status: pending
// pending-> fulfillled -> value = qr
// .then(idFind()


// api.scanQr(image, function(code){
    // image -> code-> continue;
//     api.idFind(code, function(){
//         api.amount(function(){
//                 api.pin(function(){
//                         api.initiatePayment(function(){
//                                     api.processpayment(function(){
//                                                 api.success();

//                                     });

//                         });

//                 })

//         });
//         });
// });


// Callback to promise conversion would simply mean taking asynchronous code that uses callbacks and rwriting it to use Promises instead. 
// This includes converting setTimeout, callback hell chains ,api calls to promise based flows 

// why is this important? because promises make async code easier to read, denbug and improve 

// callback problem -> difficult to read, to debug, to handle errors conssitetly 

// Promisify -> wrapping a callback based function in a promise, so it returns a promise object istead of expecting a value.

// step1(function(){
//     step2(function(){
//         step3(function(){

//         })
//     })
// })


// function promisifiedFunction(..args){
//     return new Promise((resolve, reject)=>{
//         if(err) reject(err);
//         else resolve(XPathResult);
//     })
// }


//promisify task

function step1(callback){
    setTimeout(()=>{
        console.log("Step 1");
        // callback(reason, value)
        callback(null, 1);
    }, 500);
}


function step2(prev, callback){
    setTimeout(()=>{
        console.log("Step 2 executed with: ", prev);
        callback(null, prev+1);
    }, 500)
}


function step3(prev, callback){
    setTimeout(()=>{
        console.log("Step 3 with: ", prev);
        callback(null, prev+2)
}, 500)
}

step1((err, value1)=>{
    if(err) return console.error(err);
    step2(value1, (err, value2)=>{
        if(err) console.error(err);
        step3(value2, (err, value3)=>{
            if(err) return console.error(err);
            console.log("Final Result:", value3);
        })
    })
})  




// Promisified 

function step1Promise(value){
    return new Promise((resolve, reject)=>{
        step1((err, result)=>{
            if(err) reject(err);
            else resolve(result);
        })
    })
}

function step2Promise(prev){
    return new Promise((resolve, reject)=>{
        step2(prev, (err, result)=>{
            if(err) reject(err);
            else resolve(result);
        })
    })
}


function step3Promise(prev){
    return new Promise((resolve, reject)=>{
        step3(prev, (err, result)=>{
            if(err) reject(err);
            else resolve(result);
        })
    })
}


step1Promise()
    .then(value1=>step2Promise(value1))
    .then(value2=>step3Promise(value2))
    .then(final=>{
        console.log("Final value return withL ", final);
    })
    .catch(err=>{
        console.err("Error:", err);
    })