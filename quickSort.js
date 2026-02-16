function quickSort(arr){

    if(arr.length<=1){
        return arr;
    }

    const pivot = arr[0];

    let left=[], right=[];

    for(let i=1; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}


console.log(quickSort([8,1,3,7,0,10]))


function quickSortRandom(arr){
    if(arr.length<=1){
        return arr;
    }


    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex]
    let left=[], right=[]

    for(let i=0;i<arr.length; i++){
        if(i===pivotIndex) continue;
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}