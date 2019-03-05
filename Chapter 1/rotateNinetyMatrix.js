// rotate matrix clockwise 90 degrees, first change to its transpose, then reverse each row.
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let matrix2 = [[5,0],[0,5]];

const rotateNinety = (matrix, n) => {
let res = [];
for (let col = 0; col < n; col++) {
  let innerRes = [];
  for (let row = 0; row < n; row++) {
    innerRes.push(matrix[row][col]);
  }
  res.push(innerRes.reverse());

}
return res;
}

console.log(rotateNinety(matrix, 3));
console.log(rotateNinety(matrix2, 2));
