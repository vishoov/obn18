const numbers = [5,2,9,1,7,6];

//max, //min

//reduce 

const { max, min } = numbers.reduce((acc, val)=>{
    return {
        max: Math.max(acc.max, val),
        min: Math.min(acc.min, val)
    }
},
{
    max:numbers[0],
    min:numbers[0]
})


// Find all pairs in an array that sum to a target value.
const arrays = [2,4,3,5,7,8,9]
const sum =7

function findPairs(arr, target){
    const pairs = [];

    for(let i=0; i<arr.length; i++){
        let first = arr[i];
        for(let j=i+1; j<arr.length; j++){
            if(first+arr[j]% target==0){
                pairs.push([first, arr[j]])
            }
        }
    }
return pairs;
}

//find the product of array except itself
[1,2,3,4]