

//abcd
//2


// cdef


function caeser(text, shift){
    let result = "";


    for(let i=0; i<text.length; i++){
        let char = text[i];

        if(char>='A' && char<='Z'){
            let code = text.charCodeAt(i) - 65;
            let shiftedCode = (code+shift)%26;
            if(shiftedCode<0) shiftedCode+=26
            result+=String.fromCharCode(shiftedCode+65);
        }

    }
}