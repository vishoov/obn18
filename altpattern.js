function alternatePattern(n){
    if(n<3 || n>50){
        console.log("Invalid input")
        return;
    }

    for(let i=1; i<=n; i++){


        //calculate spaces
        let spaces = n-i;

        // symbols
        let symbols = 2*i-1;

        let symbol = (i%2===0) ? '#':'*';

        let row = ' '.repeat(spaces) + symbol.repeat(symbols);
        console.log(spaces+symbols)

        // for(let i=0; i<spaces; i++){
        // row+=' '
        // }


    }
}

alternatePattern(5)
