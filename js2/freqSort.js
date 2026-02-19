// [1,1,2,2,2,3];

// sort based on frequency
// meaning the number occuring the least times should come first

// intuition
// first record the frequencies (map)
// sort based on frequencoes (sorting)
// if the frequencies are equal then the elements should be in the order of descending value

function frequencySort(arr){
    // 1. build the frequency map
    const freq = new Map();

    for(let i=0; i<arr.length; i++){

            freq.set(arr[i], (freq.get(arr[i])||0)+1)

    }

    //2. now sort based on frequencies
    arr.sort((a,b)=>{
        const fa = freq.get(a)
        const fb = freq.get(b);

        if(fa!==fb){
            return fa-fb
        }

        return b-a;
    })
    return arr;
}


console.log(frequencySort([1,1,2,2,3]))