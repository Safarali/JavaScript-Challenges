// 1.

function logEach(names) {
    names.forEach(function(ele, idx){
        console.log(idx + ": " + ele);
    });
}

// 2. Max value

function maxValue(arr) {
    var max = null;

    arr.forEach(function (ele, idx) {
        if (max < ele) {
            max = ele;
        }
    });
    return max;
}

// 3. Peak finder;
// Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.


function peakFinder(arr) {
    var peaks = [];

    arr.forEach(function (ele, idx) {
        var prev = arr[idx - 1];
        var next = arr[idx + 1];

        if (idx === 0 && ele > next ) {
            peaks.push(idx);
        }else if (ele > next && ele > prev) {
            peaks.push(idx);
        }else if(idx === arr.length-1 && ele > prev) {
            peaks.push(idx);
        }
    })
    return peaks;
}

// 4.mapCreator
//
// Write a function mapCreator that takes a callback as an argument
// and returns a new function. The new function should take an array as an argument
// and return a new array, with each element 'mapped' to a new element
// using the original callback.
// var squareMapper = mapCreator(function (el) {
//   return el * el;
// });
// squareMapper([1, 2, 3, 4]); //=> [1, 4, 9, 16]
// */

function mapCreator(cb) {
    return function (arr) {
        var newArr = [];
        arr.forEach(function (ele) {
            newArr.push(cb(ele));
        });
        return newArr;
    }
}

// var squareMapper = mapCreator(function (ele) {
//     return ele * ele;
// });



// 5. objectSelect
// Write a function objectSelect, which takes as arguments an object, and a callback,
// and returns a new object where all the key value pairs return true,
// when passed into the callback.
var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};
// var matchingPairs = objectSelect(obj, function (key, val) {
//  return key === val;
// });
// matchingPairs; //=> {
//   one: "one",
//   three: "three"
// }

function objectSelect(obj, cb) {
    var newObj = {};
    for(var key in obj){
        if(cb(key, obj[key])){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

objectSelect(obj, function (key, value) {
    return key === value;
});
