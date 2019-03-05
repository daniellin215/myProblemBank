// if element in matrix is 0, change the row and col entirely to 0
const zeroifyMatrix = (matrix) => {
if (!matrix || matrix.length === 0) return null;
let m = matrix.length;
let n = matrix[0].length;

let objR = {};
let objC = {};
for ( let r = 0; r < m; r++) {
  for (let c = 0; c < n; c++) {
    if(matrix[r][c] === 0) {
      objR[r] = true;
      objC[c] = true;
    }
  }
}

for (let row in objR) {
  for (let i  = 0; i < n; i ++) {
    matrix[row][i] = 0;
  }
}
for (let col in objC) {
  for (let i  = 0; i < m; i ++) {
    matrix[i][col] = 0;
  }
}
return matrix;
}

let q  = [[1,1,1,1],[0,1,1,1],[1,1,1,1]]
console.log(zeroifyMatrix(q));
