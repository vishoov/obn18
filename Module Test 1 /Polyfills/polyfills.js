// Polyfills -> any javascript code that implements a modern feature in older browsers or environments that dont natively support it

// poly + fills -> browser compatibility gaps that need to be filled 

const arr = [1,2,3,4,5];

if(!Array.prototype.takeAverage){
    Array.prototype.takeAverage = function(){
        let sum =0;
        for(let i=0; i<this.length; i++){
            sum+=this[i];
        }

        return sum/this.length;
    }
}

console.log(arr.takeAverage())

// exclude

if(!Array.prototype.exclude){
    Array.prototype.exlude = function(el){
        for(let i=0; i<this.length; i++){
        if(this[i]===el || Number.isNaN(this[i]) || Number.isNaN(el)){
            return false;
        }
    }
        return true;
    }

}

Array.prototype.myFindIndex = function(callback){
    for(let i=0; i<this.length; i++){
        if(callback(this[i])){
            return i;
        }
    }
    return -1;
}


const nums = [5, 12, 8, 10, 120];

console.log(nums.myFindIndex(x=>x>10)); 