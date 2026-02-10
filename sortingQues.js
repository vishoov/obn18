

function moveZeroestoEnd(arr){
    let n = arr.length

    for(let i=0; i<n-1; i++){
        for(let j=0;j<n-1-i; j++){
            if(arr[j]==0 && arr[j+1]!==0){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]]
            }
        }
    }

    return arr;
}


console.log(moveZeroestoEnd([0, 5, 0, 3, 8, 0, 2]))

//hw