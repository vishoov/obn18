console.log("A"); //sync

//async -> event loop
setTimeout(() => {  //macrotask
  console.log("B");

  Promise.resolve().then(() => console.log("C"));
}, 0);

//async 
Promise.resolve().then(() => { //microtask
  console.log("D");
});


//sync
console.log("E");

// AEDBC
