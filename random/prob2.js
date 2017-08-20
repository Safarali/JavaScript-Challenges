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


// 3. countDown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

function countDown(time) {
    var timer = setInterval(function() {
        time --;
        if(time === 0) {
            clearInterval(timer);
            console.log("Done");
        } else {
            console.log(time);
        }
    }, 1000);
}

// 4. Print Array's elements each second
function printArr(arr) {
    var length = -1;
    var timer = setInterval(function() {
        length ++;
        if (length >= arr.length) {
            clearInterval(timer);
        } else {
            console.log(arr[length]);
        }
    }, 1000);
}

// 5. Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

function randomGame() {
    var random;
    var counter = 0;
    var timer = setInterval(function() {
        random = Math.random();
        counter ++;
        if (random > 0.75) {
            clearInterval(timer);
            console.log(random +  " which is greater than 0.75 was found in " + counter + " seconds");
        }
    }, 1000);
}

// 6. specialMultiply
// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.


function specialMultiply(a, b) {
    if (a && b) {
        return a * b;
    } else {
        return function (b) {
            return a * b;
        }
    }
}
