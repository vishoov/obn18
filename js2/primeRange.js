//print all prime numbers between a and b inclusive

function printPrimes(a, b){

    return helper(a, b, "")
}

function helper(a, b, output){

    if(a>b) return output;

    if(isPrime(a)){
        output+=a+" "
    }



    return helper(a+1, b, output);
}


function isPrime(num, i=2){
    if(num<=1) return false;
    if(num==2) return true;

    if(i*i>num) return true;

    if(num%i===0) return false;
    return isPrime(num, i+1);
}

console.log(printPrimes(10, 20))


