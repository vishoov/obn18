// const a = [1, 2, 3];

// const b = [...a, 5, 6]

// b[0] = 100;
// console.log(b)
// console.log(a)

// const maxele = Math.max(...b);
// console.log(maxele)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = {...obj1, ...obj2}



// function sum(first, ...rest){
//     console.log(first);
//     console.log(rest)
// }
// sum(10, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// const [first, second, ...remaining] =[1,2,3,4,5];

// console.log(first)
// console.log(second)
// console.log(remaining)



const arr = [4,5,6,8,34,2,1];

// console.log(arr.sort((a,b)=>{
//     return b-a
// }))


const mapp = new Map();

mapp.set('name', 'Anmol')
mapp.set(1, 'one');
// console.log(mapp)

const alph = ['a', 'a', 'a', 'b', 'b', 'b', 'b', 'b']
const map = new Map();
for(let al of alph){

    if(!map.get(al)){
        map.set(al, 1)
    }else{
        map.set(al, map.get(al)+1);
    }
}

alph.sort((a,b)=>{
    const freqa = map.get(a);
    const freqb = map.get(b);

    return freqb-freqa
})

// console.log(alph)


function areAnagrams(str1, str2){
    if(str1.length!==str2.length) return false;
    const freq = new Map();

    for(const char of str1){
        freq.set(char, (freq.get(char)||0)+1);
    }

    for(const char of str2){
        if(!freq.has(char)) return false;

        freq.set(char, freq.get(char)-1);

        if(freq.get(char)===0){
            freq.delete(char);
        }
    }

    return freq.size==0;

}

// silent = 
//listen = 


// Problem: What is the output of the following code? Fix it so clone is a true deep copy.


const original = {
  name: "Alice",
  address: { city: "Pune", pin: 411001 },
  hobbies: ["reading", "coding"]
};

const clone = { ...original };
clone.address.city = "Mumbai";
clone.hobbies.push("gaming");

function deepClone(obj){
    if(obj ===null || typeof obj !== 'object') return obj;

    //if the input is array
    if(Array.isArray(obj)) return obj.map(ele=>ele);

    // //check if object is there
    // return Object.fromEntries(
    //     Object.entries(obj).map(([key, val])=>[key, deepClone(val)])
    // )

    let cloned = []
    Object.entries(obj).forEach(([key, val])=>{
        cloned[key] = deepClone(val);
    })

    return cloned;

}


// console.log(original.address.city); // ?
// console.log(original.hobbies);      // ?

// Write a flattenObject(obj) that converts a deeply nested object into a flat Map with dot-notation keys.

const nested = {
  user: {
    name: "Alice",
    address: {
      city: "Pune",
      pin: 411001
    }
  },
  active: true
};

// flattenObject(nested);
/*
Map {
  'user.name'         => 'Alice',
  'user.address.city' => 'Pune',
  'user.address.pin'  => 411001,
  'active'            => true
}
*/


function flatten(obj, prefix="", map =new Map()){
    console.log(Object.entries(obj))
    for(let [key, val] of Object.entries(obj)){
        const totalKey = prefix.length!=0?`${prefix}.${key}`:key;

        if(typeof val =='object' && val!==null){
            flatten(val, totalKey, map);
        }else{
            map.set(totalKey, val);
        }
    }
    return map;
}

// flatten(nested, "", map)

console.log(flatten(nested))