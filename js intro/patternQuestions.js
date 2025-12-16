//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *


function diamond(n){
    for(let i=1; i<=n; i++){
        //outer spaces
        line=""
        for(let j=1; j<=n-i; j++){
            line+=" "
        }

        for(let k=1; k<=2*i-1; k++){
            if(k==1 || k== 2*i-1){
                line+="*"
            }else{
                line+=" "
            }
        }
        console.log(line)
    }
}

diamond(5)


// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *


function butterfly(n){
    //upper half loop
    for(let i=1; i<=n; i++){
        let line = "";

        //stars populate
        for(let j=1; j<= i; j++){
            line+="*"
        }

        //spaces
        for(let j=1; j<= 2*(n-i); j++){
            line+=" "
        }

          //stars populate
          for(let j=1; j<= i; j++){
            line+="*"
        }

        console.log(line)
    }


   for(let i = 1; i<n; i++){
        let line = ""

        for(let j=n-i; j>0; j--){
            line+="*"
        }

        //spaces

        for(let j=1; j<=2*i; j++){
            line+=" "
        }

        for(let j=n-i; j>0; j--){
            line+="*"
        }



        console.log(line)
   }
}

// butterfly(4)


// *   *
//  * * 
//   *  
//  * * 
// *   *

// let n=3
// for(let i=1; i<=2*n-1; i++){
//     let line =""
//     for(let j=1; j<=2*n-1; j++){
//         if(j==i || j==2*n-i) line+="*"
//         else line+=" "
//     }
//     console.log(line)
// }


let line =""
let n = 3

for(let i=1; i<=n; i++){
    let line=""
    //left spaces
    for(let j=1; j<i; j++){
        line+=" "
    }
    line+="*"

    for(let j=2*n-i; j>i+1; j--){

        line+=" "
    }
    if(i!==n) line+="*"
    console.log(line)
}

