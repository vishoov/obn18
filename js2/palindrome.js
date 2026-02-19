//find all substrings
// 1. that are palindromes
// 2. with lengtgh >1

// intuition: 
// find all substrings -> a continuous sub part of the string
// palindrome -> any string that reads the same forwards and backwards 

// examples i
// input abaab 
// first find out all the substrings with length >1 
// ab, aba, abaa, abaab
// ba, baa, baab
// aa, aab
// ab
// step 2 
// aba, baab
// aa


function palindromeSubstrings(str){

    const n = str.length;

    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            const curr = str.substring(i, j+1)
            if(curr==curr.split("").reverse().join("")){
                console.log(curr)
            }
        }
    }
}


// palindromeSubstrings('abaab')

//this was the brute force solution, where we used nested loops to generate all substrings, and then in order to check the palindrome, we reversed the current stirng and checked if it is equal to the original string 

// optimization 2 levels
//1/ loop level
function isPalindrome(str){
    let left = 0;
    let right = str.length-1;

    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;

}


function palindromeSubstringsopt1(str){

    const n = str.length;

    for(let i=0; i<n; i++){
        let curr = ""
        for(let j=i; j<n; j++){
            curr+=str[j];
            // if(curr==curr.split("").reverse().join("") && curr.length>1){
            if(isPalindrome(curr) && curr.length>1){

                console.log(curr)
            }
        }
    }
}

palindromeSubstringsopt1('abaab')

