//CALLBACKS 

//qrScan()
// idFind()
// amount
// pin
// initiatepayment 
// processpayment 
//success 


// Callback 
// 1. sequential calling 
// 2. inversion of control : means that we give the control of execution of a function to another function 

// api 
// const image = camera.captureQr();

// function idFind(code){
//     const user = database.find({id:code})
// }

// api.scanQr(image, function(code){

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

// Inversion of control 




// PROMISES 

// A PROMISE IS A JAVASCRIPT OBJECT THAT REPRESENTS EVENTUAL SUCCESS OF FAILURE OF AN ASYNCHRONOUS FUNCTION

// const userlink ="https://api.github.com/users/vishoov";

// const data = fetch(userLink);

// Promise States:
// 1. Pending:  the work is still under progress
// 2. Fulfilled: the work has succeeded and returned a valid value;
// 3. Rejected: means the work has failed and produced an error

// Step by step flow: 
// 1.create a promise (state pending)
// 2. work in progress
// 3. server responds 
// 4. if successfull -> .then() promise state: fulfilled
// 5. if error -> ,catch() -> promise state: rejected 


const loadData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("mauj");
    }, 2000);
});

// loadData.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.error(data)
// });


const fetchUser = new Promise((resolve, reject)=>{
    const success = true;

    setTimeout(()=>{
        if(success){
            resolve({
                id:1,
                name:"Aman"
            });
        }else{
            reject(new Error("User not found"));
        }
    }, 2000)
})

fetchUser   
    .then(
        (data)=>{
            console.log(data);
            return data;
        }
    )
    .then((user)=>{
        console.log(user.name);
        return user.name;
    })
    .then((name)=>{
        console.log(name.length);
        return name.length;
    })
    .then((length)=>{
        if(length>3){
            console.log("Strong name")
        }else{
            console.log("too short");
        }
    })
    .catch((err)=>console.error(err))
    .finally(()=>{
        console.log("process ended")
    })




    // resolve(value) -> function argument 
        // whenever your asynchronous operation succeeds, the callback function calls this
        // promise transition pending-> fulfilled
        // the value we pass becomes the argument to the .then handler

    // reject(reason) -> function argument 
        // called when operation fails 
        // transitions promise prending-> rejected
        // reject calls the catch handler with the reason as argument

    // These two are used because:
        // A promise is something that will eventually give us either a result or an error
        // resolve and reject are the only ways inside the executer function to signal that the work is done
        // these let us treat async operations like normal values-> success goes to then and failure goes to catch

        // think of resolve as "the operation completed successfully" and reject as the 'operation failed with an error"
