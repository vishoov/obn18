
function calcuatePari(grid){
    let n = grid.length;
    let m = grid[0].length;

    let cnt = 0;

    for(let i=0; i<n;i++){
        for(let j=0; j<m; j++){
            if(grid[i][j]===1){
                if((i>0 && grid[i-1][j]===0) || i===0){
                    cnt++;
                }
                if((j>0 && grid[i][j-1]===0) || j===0){
                    cnt++;
                }

                if((i<n-1 && grid[i+1][j]===0) || i===n-1){
                    cnt++;
                }

                if((j<m-1 && grid[i][j+1]===0) || j===m-1){
                    cnt++;
                }


            }
        }
    }
    return cnt;
}



const arr = [
[0,1,0,0],
[1,1,1,0],
[0,1,0,0],
[1,1,0,0]
]

console.log(calcuatePari(arr))