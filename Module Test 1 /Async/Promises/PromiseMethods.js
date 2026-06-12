function fetchUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({id:1, name:"Anmol"})
        }, 2000)
    })
}

function fetchOrders(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve({id:1, status:"pending"})
            reject("orders couldnt be fetched")
        }, 2000)
    })
}

function fetchNotifications(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(["Welcome", "New orders to be fulfilled"])
        }, 0)
    })
}

async function loadDashboard(){
    // const user = await fetchUser();
    // // pause 
    // const orders = await fetchOrders();
    // // pause
    // const notifications =await fetchNotifications();
    // // pause

    // all promises must succeed before continuing i.e. before loading the dashboard
    try{
    // const value= await Promise.race(
    //     [
    //         fetchUser(),
    //         fetchOrders(),
    //         fetchNotifications()
    //     ]
    // )

      const [users, orders, notifications]= await Promise.allSettled(
        [
            fetchUser(),
            fetchOrders(),
            fetchNotifications()
        ]
    )

    console.log(users, orders, notifications);
    // console.log(value)
}
catch(err){
    console.log(err)
}
}

loadDashboard();


// Promise.race([fetchUser(), fetchOrders(), fetchNotifications()])
// .then(console.log)
// .catch(err=>console.error(err))


// fetchUser()->complete->fetchOrder()->complete->fetchNotifications()->complete

// promise.all-> 3 promise -> call them at once -> as soon as each promise completes store its data
// -> as soon as all promises complete -> fulfill the promise.all 


// Promise methods 
// Promise.all() -> takes multiple promises and returns one promise that fulfills ONLY WHEN ALL OF THEM FULFILL
// If any promise rejects, the whole combined promise rejects immediately with that first rejection 

// Promise.race()-> this will make all the promises race, and first promise to settle (reject or resolve) -> will be considered

// Promise.allSettled() -> it will wait until each promise has settled and then gives us an array describing each outcome


// Promise.any() -> resolve as soon as first promise fulfills (resolve, reject)
//homework 

// skyscanner -> air india, lufthansa, indigo 

// promise.all? or promise.allSettled? 

// Sequential execution vs parallel execution 
// seq= promise1 -> promise2 -> promise3 -> total time = promise1time + promise2time + promise3time

// concurrent = concurrent execution -> all the promises will start together 
// total time ~ slowest task 