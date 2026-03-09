// Space complexity is the measure of how much extra space does an algorithm require as compared to input size

function sumArray(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum;
}

// the space is constant in terms of N meaning that even if we change the size of the array, the variables will still be the same 
// constant space complexity = O(1)


// O(1) = extra memory does not grow with the size of input


function copyArray(arr){
    let copy = []
    for(let i=0; i<arr.length; i++){
        copy.push(arr[i])
    }

    return copy
}
// O(n) -> Linear space complexity 


function createMatrix(n){
    const matrix = [];

    for(let i=0; i<n; i++){
        matrix.push([])
        for(let j=0; j<n; j++){
            matrix[i].push(i*j);
        }
    }
    return matrix;
}

// O(n2) = Quadratic time complexity

// Tricky Space Complexity questions

function doubleA(arr) {
  return arr.map(x => x * 2);
}
// O(n) space

function doubleB(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * 2;
    }
    return arr;
  }
let arr = [1,2,3,4]
  let x = doubleB(arr)

  console.log(arr)
  console.log(x)

//   in-place modification
// O(1) - space


function processData(arr) {
    const filtered = arr.filter(x => x > 0);
    const doubled = filtered.map(x => x * 2);
    return doubled;
  }

//   n+n 2n -> O(n)


function matrix(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      result.push(row);
    }
    return result;
  }
// O(n2)


function collectEven(arr, index = 0, result = []) {
    if (index >= arr.length) return result;
    if (arr[index] % 2 === 0) {
      result.push(arr[index]);
    }
    return collectEven(arr, index + 1, result);
  }

  //O(n)
  

  collectEven([1,2,3,4,5,6,7,8,9,0])


  function countFrequency(arr) {
    const freq = {};
    for (let num of arr) {
      freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
  }
  

  function allPairs(arr) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        pairs.push([arr[i], arr[j]]);
      }
    }
    return pairs;
  }
  