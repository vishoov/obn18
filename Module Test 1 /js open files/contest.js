

function is_fibonacci(n){
    function fib(n, a=0, b=1){

        if(n===0 || n===1) return true;
        const nextfib = a+b;


        if(nextfib===n){
            return true;
        }
        if(nextfib>n){
            return false;


        }

        return fib(n, b, nextfib)
    }

    return fib(n)
}


const substrs = [];
function substrings(inputString, startIndex=0){
    
    for(let endIndex = startIndex+1; endIndex<inputString.length; endIndex++){
        substrs.push(inputString.slice(startIndex, endIndex))
    }

    const remainingsubstrs = substrings(inputString, startIndex+1);
    //for(i=0->n ){for(j=i+1->n)}
}