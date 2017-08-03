// 1. Given an array of integers, and a target value determine if there are two integers that add to the sum.
// Using Hash Table

function twoSum1(numbers, target) {
    var hash = {};
    var current;

    for (var i = 0; i < numbers.length; i++) {
        current = numbers[i];

        if (hash[current] !== undefined) { return true; }
        hash[target-current] = true;
    }
    return false;
}


// 2. Given a bit array (bitset array) return it sorted in-place. A bit array is array that only contains: 1 or 0).

function bitArraySort(arr) {
    var zeros = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0){ zeros ++; }
    }

    for (var j = 0; j < arr.length; j++) {
        arr[j] = j < zeros ? 0 : 1;
    }

    return arr;
}


// 3. Given a sorted array of unique integers, and a target value determine the index of a matching value within the array. If there is not match, return -1.

function binarySearch(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    var mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid
        }

        if (arr[mid] > target) {
            end = mid - 1; // The target is in the left hand
        } else {
            start = mid + 1
        }
    }
    return -1;
}


// 4. Print elements of array by delayiing them 1 second.

function printEachSecond(arr) {
    for (var i = 0; i < arr.length; i++) {
        (function (current) {
            setTimeout(function () {
                console.log(arr[current]);
            }, 1000 * (current + 1));
        })(i);
    }
}
