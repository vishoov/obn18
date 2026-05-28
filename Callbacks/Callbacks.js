// Callbacks are functions that are passed as arguments and invoked later by another function, event handlers, timer functions, async 
// these are useful for sequential workfloes, error handling, event driven code 

// then and catch
function serverResponse(status){
    if(status === 'success'){
        return { token: "ofhodgofhofgh" }
    } else {
        return { error: "Nahi chalega" }
    }
}

const successResponse = () => serverResponse('success')
const failureResponse = ()=>serverResponse("failure")
function serverCall(response){
    if(response){
        const token = response.token;  // FIXED: was 'obj.token'
        console.log('Token:', token);
    }
}

// FIXED: Get response first, then pass it
const response = failureResponse() //server side
serverCall(response)


// a callback if a function you hand to another function so it can call it later, now, depending on the return value of the promise we handle the response in different logics, this is done using callbacks 

// this practice is used to coordinate work that doesnt finish immediately and the output is unknown 

// then is used when the response is successful
// catch is used whenever there is an error 


// doTask((err, data) => {
//     if (err) return handleError(err); //catch
//     handleSuccess(data); //then 
//   });



// Conceptually: 1. the outer function accepts the callback and later invokes it
// 2. Callback has a responsibility to execute an action 

// Functions as arguments, execution flow, synchronous callbacks, asynchronouse callbacks -> run later, after an event 


// flow: 
// 1. define function that does some work
// 2. you pass this function into another as a callback
// 3. outer function stores or immediately invokes at callback
// 4.callback recieve the data, handle the success and failure seperatley 

// Demonstrates passing a function as a callback argument
function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message); // invoke the callback
    // showMessage("Hello, Asha")
  }
  
  function showMessage(text) {
    console.log(text);
  }
  
  greet("Asha", showMessage);

  // Demonstrates an async callback using setTimeout
console.log("Start");

const func = () => {
    console.log("This runs later");
  }

setTimeout(func, 1000);

console.log("End");



function divide(a, b, callback) {
    if (b === 0) {
      callback(new Error("Cannot divide by zero"), null);
      return;
    }
  
    callback(null, a / b);
  }
  
  divide(10, 0, (err, result) => {
    if (err) {
      console.error("Error:", err.message);
      return;
    }
  
    console.log("Result:", result);
  });


function step1(callback){
    setTimeout(()=>{
        console.log("Step 1 done");
        callback();
    }, 2000)
}


function step2(callback){
    setTimeout(()=>{
        console.log("Step 2 done")
        callback();
    }, 500)
}


step1(()=>{
    step2(()=>{
        console.log("All done")
    })
})



// this is a common measure to implement sequntial tasks using nested callbacks 
// because we know whatever callback we'are passing in a function, will be called by the function itself 

// Success and error handlers: seperate logic for happy path and failure path 
// sequential operations
getUserData(function(userInput) {
    validateEmail(userInput.email, function(isValid) {
      if (isValid) {
        createUser(userInput, function(newUser) {
          sendWelcomeEmail(newUser.email, function(emailSent) {
            logRegistration(newUser.id, function(logged) {
              console.log('Registration complete!', newUser);
            });
          });
        });
      } else {
        console.log('Invalid email');
      }
    });
  });

//   Pyramid of DOOM -> callback hell 
// each step depends on previous etep -> current step needs previous step's output 
// each step adds another callback layer
// error handling is repeated in many places 
