let n = 3

for(let i=1;i<=n;i++){
    let line = ""
    // let spaces = " "
    //spaces
    for(let j=1;j<=n-i;j++){
        line+="  "
    }
    //stars
    for(let k=1;k<=2*i-1;k++){
        line+="* "
        // line+=spaces
    }
    console.log(line)
}
//lower half
for(let i=n-1;i>=1;i--){
    let line = ""
    // let spaces = " "
    //spaces
    for(let j=1;j<=n-i;j++){
        line+="  "
    }
    //stars
    for(let k=1;k<=2*i-1;k++){
        line+="* "
        // line+=spaces
    }
    console.log(line)
}