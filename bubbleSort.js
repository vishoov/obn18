//Bublle sorting 
// bubble metophor : like bubbles in a coke can
// the largest bubbles 'bubble up' to the top (or the end of the array)
// we have multiple passes in an array so that at each pass we can bring the largest element to its correct position

// characteristics
// 1. adjacent comparision : we always compary neighbouring or adjacent elements 
// 2. swapping : we swap the elements to bring the larget element to the right
// 3. multiple passes: thia takes care of all elements untill there is not need of more swaps
// 4. in place sorting: we consider a part of the array as sorted and we focus on growing its size

[1,2,3,4]
function bubbleSort(arr){
    const n = arr.length;

    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                // let temp = arr[j];
                // arr[j]= arr[j+1];
                // arr[j+1]=temp;

                [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}


console.log(bubbleSort([5, 2, 8, 9, 1]))
// [4,1,2,3]
function bubbleSortopt(arr){
    const n = arr.length;

    for(let i=0; i<n-1; i++){
        let swapped = false;
        for(let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                // let temp = arr[j];
                // arr[j]= arr[j+1];
                // arr[j+1]=temp;

                [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
                swapped=true;
            }
        }

        if(!swapped){
            break;
        }
    }
    return arr;
}



const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
  ];


//   Challenge: Find the k-th largest element in an unsorted array using a modified bubble sort. Instead of fully sorting the array, optimize to only make enough passes to find the k-th largest.

// Example: In [3, 2, 1, 5, 6, 4], the 2nd largest element is 5.