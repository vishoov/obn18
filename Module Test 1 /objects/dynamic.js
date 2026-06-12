// Dynamic Keys 

const base = "foo";
const index = 1;

const obj = {
    [`${base}${index}`]:43,
    [`${base}${index+1}`]:45,
    [`"user-` +  Date().toLocaleString()]:"created",
    prop:123
}


console.log(obj.foo1)
console.log(obj)

// Delete 
console.log("Deleted the prop")
delete obj[`${base}${index}`]


console.log(obj)