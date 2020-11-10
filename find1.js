

// 给定一个包含了一些 0 和 1 的非空二维数组 grid
//
// 一个 岛屿 是由一些相邻的 1（代表土地）构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着
//
// 给定两个位置，判断这两个位置否在同一个岛屿上

function isSameIsland(grid, row1, col1, row2, col2) {
  // YOUR CODE HERE
  // row1, col1 是第一个位置的 行、列下标（下标从 0 开始）
  
  const p0 = grid[row1][col1];
  if(!p0){
     return false
 	}
  let temparr = [];
  const dd = function(x,y){
    
    if(grid[x]?grid[x][y]:undefined){
       temparr.push(`${x},${y}`)
       grid[x][y] = 0;
    }
    
    
    
    if(grid[x-1]?grid[x-1][y]:undefined){
       temparr.push(`${x-1},${y}`)
       grid[x-1][y] = 0;
       dd(x-1,y)
    }
    
    if(grid[x+1]?grid[x+1][y]:undefined){
       temparr.push(`${x+1},${y}`)
       grid[x+1][y] = 0;
       dd(x+1,y)

    }
    
    
    if(grid[x]?grid[x][y-1]:undefined){
       temparr.push(`${x},${y-1}`)
       grid[x][y-1] = 0;
       dd(x,y-1)

    }
    
    
    if(grid[x]?grid[x][y+1]:undefined){
       temparr.push(`${x},${y+1}`)
       grid[x][y+1] = 0;
       dd(x,y+1)

    }
  }
  dd(row1,col1);
  let j = false;
  temparr.map(item=>{
    if(item === `${row2},${col2}`){
       j = true
    }
  })
  return j
}

const grid1 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0], // row=0
  [0, 0, 1, 0, 0, 1, 0, 1, 1], // row=1
  [1, 1, 1, 1, 1, 1, 1, 0, 1], // row=2
];

isSameIsland(grid1, 0, 2, 1, 5); // 返回 true

isSameIsland(grid1, 0, 7, 2, 5); // 返回 false （注意 grid1 中 (1,7) 和 (2,6) 不算相邻）
