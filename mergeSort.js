// Merge Sort
// Merge sort is a divide and conquer algorithm that recursively divides the array into smaller subarrays, sorts them and then merges them back together in sorted order

// USP: time complexity is O(nlogn)

// divide and conquer
// divide problem into smaller problems
// conquer: conquer each smaller problem
// combine to solve the bigger problem





const numbers = [3, 4, 8, 6, 5, 9, 0];


function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight)
}


function merge(left, right){
    const result = [];
    let leftindex = 0, rightindex = 0;

    while(leftindex<left.length && rightindex<right.length){
        if(left[leftindex]<= right[rightindex]){
            result.push(left[leftindex]);
            leftindex++;
        }else{
            result.push(right[rightindex])
            rightindex++;
        }
    }

    while(leftindex<left.length){
        result.push(left[leftindex]);
        leftindex++;
    }

    while(rightindex<right.length){
        result.push(right[rightindex])
        rightindex++;
    }

    return result;

}


console.log(mergeSort(numbers))