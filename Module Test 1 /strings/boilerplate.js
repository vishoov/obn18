const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Solution {
  solve(input) {
    const lines = input.trim().split('\n');
    let index = 0;
    const t = parseInt(lines[index++]);
    
    for (let test = 0; test < t; test++) {
      const validChars = lines[index++];
      const n = parseInt(lines[index++]);
      
      let count = 0;
      for (let i = 0; i < n; i++) {
        const str = lines[index++];
        if ([...str].every(char => validChars.includes(char))) {
          count++;
        }
      }
      
      console.log(count);
    }
  }
}

let inputData = "";
rl.on("line", (input) => {
  inputData += input + "\n";
});

rl.on("close", () => {
  const solution = new Solution();
  solution.solve(inputData);
});



// 1
// abc
// 4
// ab
// abd
// cacb
// cabef