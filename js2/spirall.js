const arr= [
    [1, 2, 3, 0], 
    [4, 5, 6, 11], 
    [7, 8, 9, 22]];

function printSpiral(arr){
    const result =[]

    let left =0, right = arr[0].length-1; 
    let top =0, bottom = arr.length-1;

    while(top<=bottom && left<=right){

    for(let i=left; i<=right; i++){
        result.push(arr[top][i]);
    }

    top++;

    
    for(let i=top; i<=bottom;i++){
        result.push(arr[i][right])
    }
    right--;
    

    if(top<=bottom && left<=right){
    for(let i=right; i>=left; i--){
        result.push(arr[bottom][i])
    }
    bottom--;

    for(let i=bottom; i>=top; i--){
        result.push(arr[i][left]);
    }
    left++;
}
}

    console.log(result.join(" "))
}

printSpiral(arr)