/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
    const n = rains.length;
    const ans = new Array(n).fill(1);
    const lastRainDay = new Map();
    const sunnyDays = []; //sorted form rains[i]==0 

    for(let i=0; i<n; i++){
        if(rains[i]==0) sunnyDays.push(i);
    }

    for(let i=0; i<n; i++){
        if(rains[i]>0){
            ans[i]=-1;
            const lake = rains[i]
            
    if(lastRainDay.has(lake)){
        const lastDay = lastRainDay.get(lake);
        const index = binarySearch(sunnyDays, lastDay);

        if(index==-1 || sunnyDays[index]>=i) return [];

        ans[sunnyDays[index]] = lake;
        sunnyDays.splice(index, 1);
    }

            lastRainDay.set(lake, i);
        }
    }
    return ans;
};

function binarySearch(sunnyDays, target){
    let l = 0, r = sunnyDays.length-1, result=-1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);

        if(sunnyDays[mid]>target){
            result = mid;
            r = mid-1;
        }else{
            l=mid+1;
        }
    }
    return result;
}