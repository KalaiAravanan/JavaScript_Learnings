const test = require("node:test");

let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

// 3x3

// Access — [row][col]
//console.log(grid[0][0]);
// grid[2][1]; -> 80
// grid[1][2]; -> 60

//grid[0][0] = 100
//console.log(grid);

//console.log(grid[grid.length - 1][grid[0].length - 1]); // Last element 
// grid[2][2];



for(let i=0; i<=grid.length - 1;i++){
    for(let j=0;j<=grid.length -1 ;j++){
        console.log(grid[i][j])
    }
}

console.log(" --------- ");

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();
}
console.log(" --------- ");


// forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});

console.log(" --------- ");