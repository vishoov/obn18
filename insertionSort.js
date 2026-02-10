// Insertion Sort is a simple algorithm that builds the final sorted array one element at a time by inserting each element into its correct position within the already sorted portion of the array


//we have to assume that the first element is sorted
// then one by one we more to further elements and keep inserting them in their correct position


function insertionSort(arr){
    //we assume that first element is sorted (arr[0])

    for(let i=1; i<arr.length; i++){
        let current = arr[i]; //element to insert
        let j = i-1;  //bound of the sorted portion

        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            j--;
        }

        arr[j+1]=current;
    }

    return arr
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]))