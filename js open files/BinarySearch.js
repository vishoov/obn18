// Binary Search
// binary search is an efficient algorithm to find a target value within a sorted array by repeatedly dividing the array in half at every step.
// This algorithm works on divide and conquer principle 
// this algorithm achieves O(logn) time complexity making it exceptionally faster than linear search

// [1,2,3,4,5,6,7,8]
// left=0
// right=arr.length-1;
// find mid = left+ (right-left)/2;
// for no scalability = right+left/2;
// compare mid with target 
// if mid is larger than target -> then it means trget must be on left of mid becaue the array is sorted
// and vice vera

function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left<=right){
        let mid = Math.floor(left+(right-left)/2);

        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left= mid+1;
        }else{
            right=mid-1;
        }
    }

    return -1;
}


// 2nd case if we have an array that is sorted in descending order

function binarySearchDesc(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left<=right){
        let mid = Math.floor(left+(right-left)/2);

        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]>target){
            left= mid+1;
        }else{
            right=mid-1;
        }
    }

    return -1;
}


const products = [
    { id: 1, name: "Widget A", price: 10 },
    { id: 2, name: "Widget B", price: 25 },
    { id: 3, name: "Widget C", price: 50 },
    { id: 4, name: "Widget D", price: 75 },
    { id: 5, name: "Widget E", price: 100 }
  ];
  




function priceBinary(arr, target){
    let left = 0;
    let right = arr.length-1;

    while(left<=right){
        let mid = Math.floor(left+(right-left)/2);

        if(arr[mid].price===target){
            return mid;
        }else if(arr[mid].price<target){
            left= mid+1;
        }else{
            right=mid-1;
        }
    }

    return -1;
}

console.log(priceBinary(products, 75))
