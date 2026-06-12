// function delay(ms){
//     return new Promise((resolve, reject)=>setTimeout(reject, ms));
// }

// delay(1000)
// .then(()=>console.log("task completed"))
// .then(()=>console.log("goodnight"))
// .catch(err=>console.error(err))


// ES6 version of asynchronous 

// async/await 

// async function greet(){   
//     return new Promise((resolve, reject)=>setTimeout(resolve, 2000))
// }

// greet()
//     .then((msg)=>console.log(msg))


// sequential -> wait for prev to execute next 
// gracefully handle promises 


// A => B => delay => C 
// delay -> third party call -> data fetched from this delay function is required in C function 


function fetchUser(){
    console.log("Fetch user function started working")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                name:"anmol",
                age:10
            })
        },2000)
    })
}




async function showUser(){
    // this is bringing the user information from the server 
    console.log("show user function started working")
    const user = await fetchUser();

    console.log(user);
    console.log(user.name);

}

// showUser();


// async/await is a syntax in js that is helping us in wriitng async code that looks and behaves almost like synchronous code, which is built on top of promises.
// sequential 
// non blocking
// more readable and easy to debug 

// Concepts 

// 1. Asynchronous work -> finish later, like fetching dara, calling a db, reading a file
// instead of blocking everything until this task completes, javascript lets the rest of the program continue

//2. Promise : its just a value, that will be available later 

// 3. async -> this will mark a function as asynchronous and it will make it always return a promise, and if there is any error -> reject

// 4. await -> this will pause only the current async function until the awaited promise settles, then gives us the resolved value and moves on to the next line of code 
// -> pause here till the result arrives 


// 5. synchronous looking flow: this looks like synchronous code but works like asynchronous code


// A -> delay -> B 

function A(){
    // console.log("function A executed")
    throw new Error("Ye nahi ho payega")
}

function B(){
    console.log("function B executed")
}
function delay(ms){
    //this could be a server call, db call, or any third party execution 
    return new Promise(resolve, reject=>setTimeout(()=>{
        console.log("delay")
        resolve()
    }, ms));
}



// A -> delay -> B
async function run(){
    try{
        A();
        await delay(2000);
        B();
    }catch(err){
        console.error("Error agaya bhai")
    }
}

run()



// mobileInput()
//   .then(connectionSpeed)
//   .then(webcamAccess)
//   .then(shareScreen)
//   .then(testStarted)
//   .catch((error) => {
//     console.lor(error);
//   });

// async function studentVerification(){
//     const mobile = await mobileInput();
//     const speed = await connectionSpeed();
//     const access = await webcamAccess();
// }


// fetch("a")
//   .then(a => fetch(`b?x=${a.id}`))
//   .then(b => fetch(`c?y=${b.id}`))
//   .then(c => console.log(c));

// async function fetching(userId){
//     try{
//     const a = await fetch(userId);
//     const b = await fetch(userId);
//     console.log(b);
//     }
//     catch(err){
//         console.error(err);
//     }
//     finally{
//         console.log("sara kaam done")
//     }
// }