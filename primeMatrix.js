function primeMatric(m, n){
    const arr = [];
    for(let i=1; i<=m;i++){
        const inner = [];
        for(let j=1; j<=n; j++){
        //    product logic
        let product = i*j;

        let value = isPrime(product)?product:0;


        inner.push(value)
        }
        arr.push(inner)
    }
    console.log(arr)
}

function isPrime(n){
    if(n<2){
        return false;
    }    

    if(n===2){
        return true;
    }

    if(n%2===0){
        return false
    }

    for(let i=3; i<=Math.sqrt(n); i+=2){
        if(n%i===0){
            return false;
        }
    }

    return true;
}

primeMatric(4, 5)