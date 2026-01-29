const sett = new Set();

sett.add(4)
sett.add(4)
sett.add(5)
sett.add(6)
sett.add(3)
sett.add(7)
sett.add(4)
sett.add(4)
sett.add(4)

console.log(sett)

// whenevber we call add on a set
// computes the hash of the value
// if not, it stores the value inside the set
// returns the set object 

console.log(sett.has(4))

sett.delete(4)
console.log(sett)


console.log(sett)

// points to remember
// 1. set doesnt support index based access
const myset = new Set([1,2,3,4,5]);
const third = myset[3]
console.log(third)
const arr = [...myset];
console.log(arr[3])


// 2. set doesnt deduplicate objects based on contents
const objectset = new Set([
    {
        id:1
    },
    {
        id:1
    }
])

console.log(objectset.size)

// 3. sets are overkill meaning we shouldnt rely on sets for small collections
const setsmall = new Set([1, 2, 3])

const arraysmall = [1, 2, 3]



// Time complexities of methods

// add()/push() -> O(1)
// has() -> O(n) 
// delete() -> O(n)
// iteration -> O(n)
// size() -> O(1)


// 1. find unique characters
// write function that takes a string and returns the count of unique characters


const str = "Hehe"



    console.log(new Set(str.toLowerCase()).size)


    // if an array has duplicated or not

function hasDuplicates(arr){
    return new Set(arr).size !== arr.length
}



// Given an unsorted array of integers, find the length of the longest consecutive elements sequence. Your algorithm should run in O(n) time.

const arrey = [100, 4, 200, 1, 3, 2]

function longestseq(nums){
    let maxLength =0;
    let numSet = new Set(nums);
    for(const num of nums){
        //loop to find num+1
        if(!numSet.has(num-1)){
            let currentNum = num;
            let currentLength = 1;

            while(numSet.has(currentNum+1)){
                currentNum++;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength)
        }
    }

    return maxLength;
}

console.log(longestseq(arrey))