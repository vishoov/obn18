function PrimeFactors(n){
    const factors = [];
    
    //check for 2 
    if(n%2===0){
        factors.push(2);
        while(n%2===0){
            n=n/2;
        }
    }


    //check for odd factors from 3 
    for(let i=3; i<=Math.sqrt(n); i+=2){
        if(n%i===0){
            factors.push(i);
            while(n%i===0){
                n=n/i;
            }
        }
    }


    //if n is still greater than 1, then it means that the remaining number is a prime factor
    if(n>1){
        factors.push(n);
    }


    return factors;
}


console.log(PrimeFactors(60))
console.log(PrimeFactors(84))
console.log(PrimeFactors(17))
console.log(PrimeFactors(100))

//60 -> /2 -> 30 -> /2 -> 15 
//15/3 -> 5 


const marks = {
    math:85,
    science:90,
    english:60,
    history:100,
    geography:50
}


let sum = 0;

for(let subject in marks){
    sum+=marks[subject]
}

console.log(sum)








function numberToWords(num){
    if(num===0) return "Zero";


    //special cases for 10-19 
    const teens = {
        10:"Ten",
        11:"Eleven",
        12:"Twelve",
        13:"Thirteen",
        14:"Fourteen",
        15:"Fifteen",
        16:"Sixteen",
        17:"Seventeen",
        18:"Eighteen",
        19:"Nineteen"
    }


    if(teens[num]) return teens[num];

    const tens = Math.floor(num/10);
    const ones = num%10;

    let result = ""

    switch(tens){
        case 2: result = "Twenty "; break;
        case 3: result = "Thirty "; break;
        case 4: result = "Forty "; break;
        case 5: result = "Fifty "; break;
        case 6: result = "Sixty "; break;
        case 7: result = "Seventy "; break;
        case 8: result = "Eighty "; break;
        case 9: result = "Ninety "; break;
    }


    // if(tens>0 && ones > 0) result+=" ";

    switch(ones){
        case 1: result+= "One"; break;
        case 2: result+= "Two"; break;
        case 3: result+= "Three"; break;
        case 4: result+= "Four"; break;
        case 5: result+= "Five"; break;
        case 6: result+= "Six"; break;
        case 7: result+= "Seven"; break;
        case 8: result+= "Eight"; break;
        case 9: result+= "Nine"; break;
    }

    return result.trim();
}


console.log(numberToWords(0))
console.log(numberToWords(13))
console.log(numberToWords(45))
console.log(numberToWords(90))
console.log(numberToWords(96))


function checkPrimeFactors(num){
    const factors = [];

    //check for 2 seperately
    if(num%2==0){
        factors.push(2);
        while(num%2!==0){
            num=num/2;
        }
    }

    // rest of prime numbers
    for(let i=3; i*i<=a; i+=2){
        if(n%i==0){
            factors.push(i);
            while(n%i===0){
                n=n/i;
            }
        }
    }

    if(n>0){
        factors.push(n)
    }
}


for(let i=2 ; i<=n; i++){
    if(n%i==0){
        if(isPrime(i)){
            factors.push(i)
        }
    }
}

