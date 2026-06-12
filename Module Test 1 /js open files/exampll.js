const obj = { a:NaN, b:undefined}

const {a=10, b=20, c=50}= obj




console.log(a)

console.log(c)

let number =undefined
if(number==0){
    z=0
}else{
    z=number||10
}

console.log(z)