
// ways of creating a map

// 1. empty map and then add elements
const fruits = new Map();

// set and get 
fruits.set('apples', 100);
fruits.set('bananas', 200);
fruits.set("pineapples", 50)
fruits.set("pineapples", 500)

console.log(fruits)

// Map(2) { 'apples' => 100, 'bananas' => 200 }


//2 passing an array to the map constructor
const vegetables = new Map([
    ['carrots', 500],
    ['potatoes', 1000],
    ['tomatoes', 2020]
])

console.log(vegetables)


// const obj = {
//     name:"XYZ"
// }

// obj.name="abc"

// key differences between object and map

let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');
// map keeps the type of keys, so they are not converted to stirngs like in regular objects

console.log(map)

// map:
// 1. stores key-value pairs
// 2. no duplicacy
// 3. number, string. bool can be keys
// 4. preserves the order of insertion 




// common methods 

const myMap = new Map();

myMap.set("name", "John")
//set method is used for creating as well as updating (because of overriding)
myMap.set('name',"jack")
console.log(myMap)


//for accessing values - get
console.log(myMap.get("name"))


// for checking a value - has
console.log(myMap.has('name'))


// delete
// myMap.delete('name')

console.log(myMap)

//for getting the size
console.log(myMap.size)

// to delete all key value pairs inside a map
myMap.clear()

console.log(myMap)


// you have to create a map where the keys are objects 
let john = {name:"john"}

let mapmap = new Map()

mapmap.set(john, 10)


// iteration

let mapp = new Map([
    ["name", "Alice"],
  ["age", 30],
  ["city", "Paris"]
])

// iterate over the map using keys
for(let key of mapp.keys()){
    console.log(key)
}



for(let key of mapp.values()){
    console.log(key)
}



let values = mapp.values();

console.log( typeof values)


// MAP IS DIFFERENT FROM OBJECT BECAUSE OBJECT STORES VARIABLES (REFERENCES) INSIDE THE KEYS BUT MAP DOES NOT! 

for(let [key, value] of mapp.entries()){
    console.log(key, value)
}