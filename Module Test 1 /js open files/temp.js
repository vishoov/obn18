const a = {
    prop:"abc",
    inner:{
        innerProp:"mno"
    }
}

const b = {...a}
b.prop="hello"
b.inner.innerProp="xyz"
console.log(a)
console.log(b)