const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Solution {
    isincreasing(arr){

    }

  solve(input) {
    const lines = input.trim().split('\n')
    // this extracts all the lines from the input indidually
    const t = parseInt(lines[0]);

    let lineIndex = 1;
    for(let i=0; i<t; i++){
        const n = parseInt(lines[lineIndex]);
        const arr = lines[lineIndex+1].split(' ')
        // const arr = lines[lineIndex+1].split(' ').map(Number)
        const array = arr.map((ele)=>Number(ele));

        console.log(this.isincreasing(arr))

        lineIndex+=2
        // because we know each test case contains 2 lines

    }

  }
}
rl.on("line", (input) => {
  const solution = new Solution();
  solution.solve(input);
  rl.close();
});


// input:
// 2
// 6
// 1 2 3 4 5 6
// 4 
// 2 4 3 9 