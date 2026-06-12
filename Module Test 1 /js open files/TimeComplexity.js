// time complexity is the measure of time taken by an algorithm to execute in terms of the size of the input

// bigO notation that is the worst time taken by an algorithm, or the upper bound of the time taken 

// O(input variable )-> in terms of size

let arr = [1,2,3,4,5,5,67,4,4,3,5,3,5,3,5,3,5]

//CONSTANT O(1)

function functA(arr){
    return arr[0];
}

// n-> 2n-> 10n= inoput size
// time taken -> 1
// n^0


// Linear time complexity 
// time taken increases propertionally to the size of n
// O(n)

function linearSearch(arr){
    for(let i=0 ;i<arr.length; i++){
        if(arr[i]==target){
            return i
        }
    }
}

// Quadratic


let arrayyy = [1,2,3,4,5]
function printNumbers(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            console.log(arr[i], arr[j]);
        }
    }
}

// console.log(printNumbers(arrayyy))

// outer loop runs n time, in which, the inner loop runs n time -> n*n times = n^2 = O(n^2)


function countDown(n) {
    for (let i = n; i >= 1; i--) {
      console.log(i);
    }
  }

  //O(n)
  
  function printFiveTimes(arr) {
    const times = Math.min(5, arr.length);
    for (let i = 0; i < times; i++) {
      console.log(arr[i]);
    }
  }
  


  function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    let count =0
    while (low <= high) {
    count++;
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    console.log(count)

    return -1;
  }
//  console.log(binarySearch([1,2,3,4,5,6], 5))
console.log(binarySearch([3,4,5,6,7,8, 10], 5))


// whenever the size of the input is getting slashed by half at every step
// it means the time compelxity is logn


function mystery1(n) {
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
       console.log(i, j)
      }
    }
  }
//   i=0-> inner loop = n times 
// i=1 -> n-1
// i=2 -> n-2
// n + (n-1) + n(n-2)+....+1= n(n+1)/2=> 1/2(n^2+n)


function mystery2(n) {
    for (let i = 0; i < n; i++) {
      for (let j = n; j > 0; j = Math.floor(j / 2)) {
        // O(1) work
      }
    }
  }
  //O(nlogn)

  function mystery3(n) {
    for (let i = 1; i < n; i = i * 2) {
      for (let j = 0; j < n; j++) {
        // O(1) work
      }
    }
  }
//O(nlogn)  

  function mystery5(n) {
    for (let i = 0; i < n; i++) {          // Loop A
      for (let j = 0; j < n; j++) {        // Loop B
        for (let k = 1; k < n; k *= 2) {   // Loop C
          // O(1) work
        }
      }
    }
  }

//   O(n^2logn)
function mystery6(n) {
    for (let i = 1; i < n; i *= 3) {
      for (let j = 0; j < n; j++) {
        // O(1) work
      }
    }
  }


  function mystery7(n) {
    for (let i = 0; i < n; i++) {
      let j = i;
      while (j < i + 10 && j < n) {
        // O(1) work
        j++;
      }
    }
  }
function mystery7(n) {
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j < i + 10 && j < n) {
      // O(1) work
      j++;
    }
  }
}
// O(n)



function mystery8(n) {
    for (let i = n; i > 0; i = Math.floor(i / 2)) {
      for (let j = 0; j < i; j++) {
        // O(1) work
      }
    }
  }

//   n+n/(2)+n/4)... = 2n -> n


function mystery9(n) {
    for (let i = 0, j = 1; i < n; j++, i += j) {
                console.log(i, j)
    }
  }
//   O(undrr(n)

mystery9(9)