function factorial(n){

    //base case : where the functions stop getting executed further
    if(n==1){
        return 1;
    }

    //recursive case -> that is the case that will move our function towards the smaller problem
    return n*factorial(n-1);
}

// factorial(3) -> 3 * factorial(2)=2 -> 6
// factorial(2) -> 2*factorial(1)=1 -> 2
// factorial(1)-> 1


// Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.
// recursion excels at handling heirarchal problems
// practical definition
// recursion is when a function calls itself during its execution to solve a problem by breaking it down into smaller pieces until it reaches a base case that terminated further breaking down of problem 

//heirarchal problems
// cleaner code 
// functional programming

// components of recursion

// function call 

// recursive case -> is where the function calls itself with MODIFIED PARAMETERS that move towards the base case;

// base case : the case where further function calls stop, or defines where to end the function calling or movement of the parameters

// importance of base case -> it prevents infinite recursion -> leads to stack overflow 


function countdown(n){

    //base case: stop the execution when we reach 0
    if(n==0){
        console.log("Takeoff!")
        return;
    }

    console.log(n);
    //recursive case: count down by 1
    
    countdown(n-1);
}


// traverse an array

let arr = [1,2,3,4,5,6]
function brutetraverse(arr){
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
}


function rectrav(arr, i=0){
    if(i>= arr.length) return;
    console.log(arr[i])
    rectrav(arr, i+1)
}

rectrav(arr);
// print even numbers inside an array using recursion
function evenrec(arr, i=0){
    if(i>= arr.length) return;
    if(arr[i]%2==0){
    console.log(arr[i])
    }
    rectrav(arr, i+1)
}
// fibonacci
function fibonacci(n){
    if(n<=1) return n;

    const curr = fibonacci(n-1)+fibonacci(n-2);
    return curr;
}

// binarySearch


function binarySearch(arr, target, left=0, right=arr.length-1){


    if(left>right) return -1;

    const mid = left+Math.floor((right-left)/2);
    
    if(arr[mid]===target) return mid;
    
    if(arr[mid]<target){
        // left=mid+1;
        return binarySearch(arr, target, mid+1, right);
    }else{
        return binarySearch(arr, target, left, mid-1);
    }
}

function emptyArray(ar){

    if(ar.length==0) return;

    ar.pop();
    emptyArray(ar);
}