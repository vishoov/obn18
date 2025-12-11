// const empty = [];
// const result = empty.reduce((acc, curr) => acc + curr);
// console.log(result);



// const numbers = [1, 2, 3, 4];
// const result = numbers.reduce((acc, curr) => acc + curr, '0');
// console.log(result);
// console.log(typeof result);


// const mixed = [1, '2', 3, '4', 5];
// const result = mixed.reduce((acc, curr) => acc + curr);
// console.log(result);
// console.log(typeof result);


const matrix = [[1, 2], [3, 4], [5, 6]];


const result = matrix.reduce((acc, ele)=>{

    return acc+ele.reduce((sum, num)=>sum+num, 0);
}, 0)



console.log(result)


const cars = ['bmw', 'audi', 'merc'];

const carsop = cars.map((car, index)=>{
    console.log(`${index+1}, ${car}`)
})


const students = [
    {name: 'John', score: 85},
    {name: 'Jane', score: 92},
    {name: 'Bob', score: 88}
];

const studentsRolls = students.map(
    (student, index)=>{
        student.rollNumber = index+1
        return student
    }
)

console.log(studentsRolls)

const orders = [
    {
        product:'jacket'
    },

    {
        product:'jacket'
    },

    {
        product:'jacket'
    },

    {
        product:'jacket'
    },

    {
        product:'shirt'
    }
]

orders.map(
    (order, index, array)=>{
        const isLast = index === array.length-1;
        if(isLast) console.log(order)

        console.log(index)
    }
)



const items = ['A', 'B', 'C'];



const newitems = items.map((item, index, array)=>{
    return {
        item:item,
        isFirst : index===0 ? true:false,
        isLast : index === array.length -1 ?true : false
    }
})


console.log(newitems)


