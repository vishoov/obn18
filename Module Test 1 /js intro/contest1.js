let likes = 10
let comments = 20
let shares = 175


//multiple ternary
let greater = (likes>comments)?likes:comments;

let greatest =  greater>shares?greater:shares


// nested ternary operator
let biggest = (likes>comments)?(likes>shares?likes:shares):(comments>shares?comments:shares)


// switch case
let grtst
switch(true){
    case (likes>comments && likes>shares):

}




// days
const years = days/365
const remainingDays = days%365

const months = remainingDays/30
const days = remainingDays%30

function isValid(day, month, year){
// Valid Date 
if(month < 1 || month > 12){
    return false;
}

if(day<1) return false;

if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month ==10 || month ==12 && days > 31){
    return false
}else if (month == 4|| month==6 || month ==9 || month ==11 && days>30){
    return false
}
else{
if(isLeapYear(year) && days>29){
    return false
}else if(!isLeapYear(year) && days>28)
    return false;
}


return true;
}

function isLeapYear(year){
    return (year%4==0 && year %100!==0) || (year%400 ===0);
}
