// function fetchData(callback){
//     console.log("Fetching data from a server...");
//     setTimeout(function(){
//         callback("Data from the server");
//     }, 1000)
// }


// fetchData(function (data){
//     console.log("Recieved: ", data);
// });


// instead of giving a function to call leter, what if we give back an object that represents the future result

// object <- Promise

function fetchData(){
  return new Promise(function (resolve, reject){
    console.log("Fetching data from a server...");
    setTimeout(function(){
        resolve("Data recieved")
    }, 1000)
}
)}

// console.log(fetchData());


fetchData().then(
    function (data){
        console.log("Recieved:", data);
        throw new Error("Baat bigad gayi then wale me")
    }
).then((data)=>{
    console.log(data.toUpperCase());

})
.catch((err)=>{
    console.error("YE catch wala block bol raha hai", err);
})

// With callbacks, we pass the function into fetchData and fetchData controls when this function will be called 

// With promises, fetchData returns a Promise -> object -> state -> as the state of the promise updates we handle the data using .then/.catch handlers 


// write a function calculate(a, b, callback)
// add a+b
// function(sum){
// console.log("the sum is", sum)
// }

// Callback Version

// function calculate(a, b, callback){
//     const sum = a+b;
//     callback(sum);
// }

// calculate(2, 3, function (sum){
//     console.log("Sum is ", sum);
// })



// Promise Version
function calculate(a, b){
    return new Promise((resolve, reject)=>{
        const sum = a+b;

        resolve(sum);
    })
}

calculate(2, 3)
    .then(function (sum){
        console.log("The sum of these numbers is ", sum)
    })


    