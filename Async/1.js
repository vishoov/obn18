// console.log("Start");

// // async 
// setTimeout(()=>{
//     console.log("Runs after 1 second")
// }, 0);


// console.log("End");



// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// setTimeout(() => {
//   console.log("3");
// }, 1000);

// console.log("4");


// console.log("X");

// setTimeout(() => {
//   console.log("Y");

//   setTimeout(() => {
//     console.log("Z");
//   }, 1000);
// }, 1000);

// console.log("W");


// console.log("One");

// setTimeout(() => {
//   console.log("Two");
// }, 500);

// console.log("Three");

// setTimeout(() => {
//   console.log("Four");
// }, 0);

// console.log("Five");


function bringfrommarket(veggie){
  setTimeout(()=>{
    console.log("Babycorn acquired");
  }, 5000)

  return true;
}


function cookHakkaNoodles(){
  // 1. bring noodles 
  console.log("noodles agaye")

  // 2. bring vaggies
  console.log("Veggies are here ")

  // we dont have baby corn 
  if(bringfrommarket("babycon")){

  console.log("Cooked!")
  }


}
cookHakkaNoodles();