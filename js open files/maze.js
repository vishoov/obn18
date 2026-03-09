function uniquePaths(n, m){


    function countPaths(row, col){

        //1, out of bound
        if(row>=n || col>=m){
            return 0;
        }

        //2. destination reached
        if(row===n-1 && col === m-1){
            return 1;
        }

        const pathstoRight = countPaths(row, col+1);
        const pathsDown = countPaths(row+1, col);

        return pathstoRight+pathsDown
    }

    return countPaths(0, 0)


}


console.log(uniquePaths(3, 3))



// A wizard has a collection of n magical spells represented as an array of integers. To cast them properly, they must be sorted in ascending order. However, the wizard can only use pure recursion with the merge sort technique.

// Constraints
// 1 ≤ n ≤ 1000
// -10⁶ ≤ array[i] ≤ 10⁶
// Must use recursion (no iterative approaches)
// You must implement both the merge and mergeSort functions
// Input/Output Format
// Input: An array of integers
// Output: An object containing:
// sortedArray: The sorted arra
// mergeCount: Total number of merge operations performed

// Input: [4, 2, 3, 1]
// Output: {
//   sortedArray: [1, 2, 3, 4],
//   mergeCount: 3
// }