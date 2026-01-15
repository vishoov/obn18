// Problem 1: Create and initialise a Matrix 
// input -> row, col, default


// input : row= 3, col= 4, default = 1
// output:[
//     [1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1]
// ]


// method 1: using nested for loops

function forLoop(row, col, def){
    let matrix =[];

    for(let i=0; i<row; i++){
        // let inner = []
        matrix[i]= [];
        for(let j=0; j<col; j++){
            matrix[i][j]= def;
        }
        //matrix.push(inner)
    }
    return matrix;
}

// console.log(forLoop(3, 4, 10))


// method 2:using Array() with fill and map
//functional programming
function fillMap(row, col, def){
    return Array(row).fill().map(()=>Array(col).fill(def))
}

console.log(fillMap(3, 4, 5))


// method 3: using array constructor with fill and map (this is the OOP way)
function OOPArray(row, col, def){
    return new Array(row).fill().map(()=> new Array(col).fill(def))
}


//method 4: using from method 

function fromMethod(row, col, def){
    return Array.from({length:row}, ()=>{
        return Array.from({length:col}, ()=>def)
    })
}


// console.log(fromMethod(3, 4, 2))


// Problem 2: Matrix Addition

const matrix1 = [[1,2], [3,4]]
const matrix2 = [[5,6], [7,8]]
// Output: [[6,8], [10,12]]

// matrix[0].lengthv-> columns
// matrix.length -> rows

function addMatrices(matrix1, matrix2){
    //check dimensions
    if(matrix1.length !== matrix2.length || matrix1[0].length!==matrix2[0].length){
        return "Dimensions not same, hence addition cant be done"
    }

    // add using nested for loops
    let row = matrix1.length;
    let col = matrix1[0].length;
    const result = []

    for(let i=0; i<row; i++){
        result[i]=[]
        for(let j=0; j<col; j++){
            result[i][j]= matrix1[i][j]+matrix2[i][j]
        }
    }

    return result;
}


console.log(addMatrices(matrix1, matrix2))



// Problem 3 -> Rotate Matrix 90 degrees

// transpose then reverse