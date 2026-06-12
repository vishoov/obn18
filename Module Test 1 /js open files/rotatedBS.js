function rotatedBinarySearch(nums, target){
    //rotated -> pivot -> left array sorted and right array sorted
    let n = nums.length;
    const pivot = findPivot(nums);

    // final step 
    // binary search 0 -> pivot
    if(target>=nums[pivot] && target<=nums[n-1]){
        return binarySearch(nums, target, pivot, n-1)
    }else{
        return binarySearch(nums, target, 0, pivot-1);
    }
    // binary search pivot -> nums.length
}

function binarySearch(nums, target, left, right){

    while(left<=right){
        let mid =Math.floor(left + (right-left)/2);
        if(nums[mid]===target){
            return mid;
        }else if(nums[mid]<target){
            left=mid+1;
        }else{
            right = mid-1;
        }
    }

    return -1;

}

function findPivot(nums){
    let left = 0;
    let right = nums.length-1;

    while(left<right){
        let mid = Math.floor(left+(right-left)/2);

        // if mid is greater than left
        // this will happen if the part of the array that we are considering is sorted
        if(nums[mid]>nums[left]){
            left=mid

        }else{
            right=mid
        }
    }
    return right+1;
}




console.log(rotatedBinarySearch([4, 5, 6,7,8,9, 0, 1, 2], 9));
console.log(rotatedBinarySearch([4, 5, 6,7,8,9, 0, 1, 2], 2));
console.log(rotatedBinarySearch([4, 5, 6,7,8,9, 0, 1, 2], 6));