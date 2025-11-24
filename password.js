const password = "4964969ehkdhofh"


function checkPassword(password){

    //type check and length check
    if(password.length<8) return false;

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;

    const specials = ["@", "#", "$", "%", "&", '_', '^', '*', '?'];

    for(let ch of password){
        if(ch>'A' && ch <='Z') hasUpper = true;
        else if (ch>='a' && ch<='z') hasLower = true;
        else if (ch>='0' && ch<='9') hasDigit=true;
        else if (specials.includes(ch)) hasSpecial=true
    }

    return hasUpper && hasLower && hasDigit && hasSpecial
}


console.log(checkPassword("123"))



function checkMail(mail){
    const splittedArray = mail.split("@");

    if(splittedArray[splittedArray.length-1]=="gmail.com" && splittedArray.length>1 && !(splittedArray[0]=="")){
        return true;
    }
    else return false;
}


console.log(checkMail("@gmail.com"))