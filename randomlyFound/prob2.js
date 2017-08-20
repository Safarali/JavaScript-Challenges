// 1. Rotate Array
// Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
// rotate([1,2,3], 1) // [3,1,2]
// rotate([1,2,3], 2) // [2,3,1]
// rotate([1,2,3], 3) // [1,2,3]

function rotate(arr, num) {
    var amount = num % arr.length;
    for (var i = 0; i < amount; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

// 2. Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O"

// makeXOGrid(1,4)
// /*/
// [["X","O","X","O"]]
// /*/
// makeXOGrid(3,2)
// /*/
// [["X","O"],["X","O"],["X","O"]]
// /*/
// makeXOGrid(3,3)
// /*/
// [["X","O","X"],["O","X","O"],["X","O","X"]]
// /*/

function makeXOGrid(rows, columns) {
    var grid = [], column = [];

    for (var i = 1; i <= rows * columns; i++) {
        if(i % 2 !== 0) {
            column.push("X")
        } else {
            column.push("O");
        }
        if(column.length === columns) {
            grid.push(column);
            column = [];
        }
    }
    return grid;
}
