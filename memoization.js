function fibonacci(n){
    if(n<=1) return n;
    return fibonacci(n-1)+fibonacci(n-2);
}


function fibonacciMemo(n, memo={}){
    // if(memo[n]!==undefined)
    if(n in memo) return memo[n];

    if(n<=1) return n;

    memo[n] = fibonacciMemo(n-1)+fibonacciMemo(n-2)

    return memo[n];
}



function factorial(n, memo={}){

    if(n in memo) return memo[n]


    if(n<=1) return 1
    memo[n] =  n * factorial(n-1);

    return memo[n]
}