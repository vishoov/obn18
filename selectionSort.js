// Selection sort is a sorting algorithm that is based on single comparison logic 
// where we repearedly find the smallest element from the unsorted portion of the array and place it in the correct position in the sorted portion

// main logic 
// divide the array into sorted portion and unsorted portion 
// and repeatedly select the smallest element




function selectionSort(arr){
    const n = arr.length;

    for(let i=0; i<n-1; i++){
        let minIndex = i;

        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex!==i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// pros
// very simple to implement, minimal memory usage, fewer swaps as compared to bubble

// cons
// very slow for large data
// Always O(n2) even if array is sorted (there is not early termination )



console.log(selectionSort([6, 5, 2, 1, 4, 3]))




function smallestKElement(arr, k){
    const n = arr.length;

    for(let i=0; i<k; i++){
        let minIndex = i;

        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex!==i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr[k-1];
}

console.log(smallestKElement([7, 10, 4, 3, 20, 15], 3));