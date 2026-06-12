// const day = 19

// // function dayName(day){
// //     //print name of the day 
// // }

// if(day==1){
//     console.log("Monday")
// } 
// else if(day==2){
//     console.log("Tuesday")
// }
// else if(day==3){
//     console.log("Wednesday")
// }
// else if (day==4){
//     console.log("Thursday")
// }
// else if(day==5){
//     console.log("Friday")
// }
// else if (day==6){
//     console.log("Saturday")
// } else if(day==7){
//     console.log("Sunday")
// }else console.log("Invalid day number")


const day = 3

switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Day")



}



let a = 1

switch(a){
    case "1":
        console.log("Loose Comparison")
        break;
    case 1:
        console.log("Strict Comparison")
        break

}




// Fall through behaviour
const color = "red";

switch (color) {
  case "red":
    console.log("Red");
  case "green":
    console.log("Green");
  default:
    console.log("Done");
}



//grouping cases (intentional fall throiugh)

const grade = "C";

switch(grade){
    case "A":
    case "B":
    case "C":
        console.log("Result is good")
        break;
    case "D":
        console.log("Grade is poor")
        break;
    default:
        console.log("Invalid Grade")
}



//default -> optional but recommended to handle unexpected values or errors gracefully


// when to use switch ase vs if/else
// use switch when:
// you are comparing one variable or one expression against many constant values 
// All comparsions should be strict equality checks and there is not complex boolean logic

// if/else 
// conditions are comparsions (x<10 or x>50) or complex comparisons
// when you rely only on returns with more dynamic logic 


// CALCULATOR

function calculate(a, b, operator){
    switch(operator){
        case "+":
            return a+b
        case "-":
            return a-b
        case "*":
            return a*b;
        case "/":
            return a/b
        default:
            return "Invalid Operator"
    }
}

console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "-"))