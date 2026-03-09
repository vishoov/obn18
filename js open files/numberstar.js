//step 1 : break the problem into smaller parts
// in order to print a dimaond pattern
// we have to print 2 pyrmaids 
// one it pyramid pointing up
// second pyramind pointing down 

//now, further breaking down the problem
//in order to print a pyramind
//we have to print two diagonals 


// in order to print a diagonal we have to first count the spaces 
// then you add rhe index of the row 


//to print diagonal this is the function 
function printDiagonal(n){
    
    for(let i=1; i<=n ; i++){
        let row = ""
        let spaces = n-i;

        for(let i=0; i<spaces; i++){
            row+=" "
        }

        row+=i

        console.log(row)
    }

}


// printDiagonal(4)

function printPyramid(n){
    //left diaginal logic
    for(let i=1; i<=n ; i++){
        let row = ""
        let spaces = n-i;

        for(let i=0; i<spaces; i++){
            row+=" "
        }

        row+=i

        // console.log(row)
        //now we will add the middle spaces 
        if(i>1){
          for(let k=1; k<= (2*i-3); k++){
            row+=" "
          }

          row+=i
    
    
        }
        console.log(row)
    }
    for(let i=n-1; i>=1 ; i--){
        let row = ""
        let spaces = n-i;

        for(let i=0; i<spaces; i++){
            row+=" "
        }

        row+=i

        // console.log(row)
        //now we will add the middle spaces 
        if(i>1){
          for(let k=1; k<= (2*i-3); k++){
            row+=" "
          }

          row+=i
    
    
        }
        console.log(row)
    }


}

printPyramid(4)