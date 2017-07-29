// Write a function myForEach(arr, cb) that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. Do not use the built-in Array.prototype.forEach method. The return value is irrelevant.

function myForEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i];
        cb(ele, i, arr);
    }
}

// Invoking myForEach by passing anynomous function as argument
// myForEach([1,2,3], function(ele, i, arr) {
//   console.log(ele + " is at position " + i + " in array " + arr);
// });




// Write a function mySelect(arr, cb) that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. It should return a new array of all the elements in the input array arr where the callback cb returns true.

function mySelect(arr, cb) {
    var selected = [];

    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i];
        if (cb(ele, i, arr)) {
            selected.push(ele);
        }
    }

    return selected;
}

function mySelect1(arr, cb) {
    var selected = [];

    myForEach(arr, function(ele, i, arr) {
        if (cb(ele, i, arr)) {
            selected.push(ele);
        }
    });

    return selected
}



// Write a function myReject(arr, cb) that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. It should return a new array of all the elements in the input array arr where the callback cb returns false.


function myReject(arr, cb) {
    var rejected = [];

    myForEach(arr, function(ele, i, arr) {
        if(!cb(ele, i, arr)){
            rejected.push(ele);
        }
    });

    return rejected;
}


// Write a function myMap(arr, cb) that accepts an array and a callback. It should pass each element, its corresponding index, and the array itself to the callback. Do not use the built in Array.prototype.map method. It should return an array where each element is the return value of the callback given the element in the corresponding position. See the examples if this is confusing.

function myMap(arr, cb) {
    var mapped = [];

    myForEach(arr, function(ele, i, arr){
        mapped.push(cb(ele, i, arr));
    });

    return mapped;
}

function myMap1(arr, cb) {
    var mapped = [];

    arr.forEach(function(ele, i, arr){
        mapped.push(cb(ele, i, arr));
    });

    return mapped;
}

//Write a function createExpFunc(num) that accepts a positive integer. It returns a function which will raise its input to the power specified by num and returns the value.

function createExpFunc(power) {
    return function(num) {
        return Math.pow(num, power);
    };
}
