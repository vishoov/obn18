
function reverseNumber(n){
    for(let i=1; i<=n; i++){
        let str = ""
        for(let j=1; j<=i; j++){
            str=j+" "+str;
        }
        console.log(str)
    }

}
reverseNumber(reverseNumber(5))

function revv(n){
    for(let i=1; i<=n; i++){
        let str = ""
        for(let j=i; j>=1; j--){
            str+=j+" ";
        }
        console.log(str)
    }

}

revv(5)


function star(n) {
    if (n < 1) return;
  
    star(n - 1);
    helper(n);
  }
  
  function helper(n, line = "") {
    if (n < 1) {
      console.log(line);
      return;
    }
    line += n + " ";
    helper(n - 1, line);
    line += n;
  }