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