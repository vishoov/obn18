//filter odd ones
// take square of odds
// take sum of squares

function oddSquareSum(arr){
    return arr.filter(num=>num%2!==0)
    .map(num=>num*num)
    .reduce((sum, square)=>sum+square, 0)
}


console.log(oddSquareSum([1,2,3,4,5,6]))


function oddSquareopt(arr){
    const ans = arr.reduce((sum, num)=>{
        if(num%2!==0){
            sum+=(num*num)
        }
        return sum;
    }, 0)

    return ans;
}

console.log(oddSquareopt([1,2,3,4,5,6]))