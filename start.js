

// function DrawStar(n){
//     for(let i=1; i<=n; i++){
//        str = "";
//        for(let j=n-i; j>0; j--){
//         str+=' ';
//        }
//       for(let j =1; j<=i; j++){
//         str+= '* ';
//       }
//        console.log(str)
//     }
// }


// DrawStar(3)

function whileStar(n){

    let i=1;
    while(i<=n){
     let str="";
        let j=n-i;
        while(j>0){
            str+=' ';
            j--
        }

        let stars = 1
        while(stars<=i){
            str+='* '
            stars++
        }


        console.log(str)


        i++;
    }
}

whileStar(4)