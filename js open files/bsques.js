const arr = [-2, -1, 0, 3, 5, 9, 12];

//9
//2

function binarySearch(arr, target){
    let left = 0, right= arr.length-1;

    while(left<=right){
        let mid = Math.floor(left+(right-left)/2)

        if(arr[mid]==target){
            return mid;
        }else if(target<arr[mid]){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return -1;   
}

console.log(binarySearch(arr,  9))

// important question

const arrr = [1,2,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,5,6,7,8,9]

//find the first occurrence of the target

// target=2



function firstOccurence(arr, target){
    let left = 0, right= arr.length-1;
    let result = -1;
    while(left<=right){
        let mid = Math.floor(left+(right-left)/2)

        if(arr[mid]==target){
            result = mid;
            right=mid-1;
        }else if(target<arr[mid]){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return result;
}


console.log(firstOccurence(arrr, 3))

// find the last occurence 


function lastOccurence(arr, target){
    let left = 0, right= arr.length-1;
    let result=-1;

    while(left<=right){
        let mid = Math.floor(left+(right-left)/2)

        if(arr[mid]==target){
            result=mid;
            left=mid+1;
        }else if(target<arr[mid]){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return result;  
}


// let arr2 = [1,2,3,5,6,7,8,9]
// target = 4

//find out the insertion index where the target should be added to preserve the sorted order of the array



function binarySearch(arr, target){
    let left = 0, right= arr.length-1;

    while(left<=right){
        let mid = Math.floor(left+(right-left)/2)

        if(arr[mid]==target){
            return mid;
        }else if(target<arr[mid]){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return left;
}



// Search in Rotated Sorted Array ** 

// [0, 1, 2, 3, 4, 5, 6, 7]
// [4, 5, 6, 7, 0, 1, 2, 3]
//target 0



// O(logn)