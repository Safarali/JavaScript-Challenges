// peakFinder
// Write a function `peakFinder(array)` that takes in an array of numbers. It should
// return an array containing the indices of all the peaks. A peak is an element
// that is greater than both of its neighbors. If it is the first or last element,
// it is a peak if it is greater than its one neighbor. Assume the array has a length
// of at least 2.
// peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]

function peakFinder(numbers) {
    var peaks = [];

    for(var i = 0; i < numbers.length; i ++){
        var prev = numbers[i - 1];
        var next = numbers[i + 1];
        var maybePeak = numbers[i]

        if (i === 0 && maybePeak > next) {
            peaks.push(i);
        }else if (maybePeak > prev && maybePeak > next) {
            peaks.push(i);
        } else if (i === numbers.length-1 && maybePeak > prev) {
            peaks.push(i);
        }
    }
    return peaks;
}


// divisibleByThreePairSum
// Write a function `divisibleByThreePairSum(array)` that takes an array of numbers.
// It should return an array of all the pairs of indices, whose elements sum to a
// multiple of three.

function divisibleByThreePairSum(array) {
    var pairs = [];

    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) % 3 === 0) {
                pairs.push([i, j]);
            }
        }
    }
    return pairs
}

//====================isValidEmail =======================//
function isValidEmail(email) {

    var parts = email.split("@");

    // Checks if contains one and only one "@" symbol
    if(parts.length !== 2){
        return false;
    }

    var userName = parts[0];
    var domain = parts[1];

    // Checks if all the characters before the "@" symbol are alphanumeric, underscores, or dots "."

    for(var i = 0; i < userName.length; i ++){
        var char = userName[i];
        if(!isAlphabetic(char) && !isNumeric(char) && char !== "_" && char !== "."){
            return false;
        }
    }

    // Checks if there is one and only one dot "." after the "@" symbol

    var dotSplitter = domain.split(".");

    if(dotSplitter.length !== 2 || dotSplitter[0] === ""){
        return false;
    }

    // Checks if besides the dot ".", all the characters after the "@" are in the alphabet
    // (no numbers or underscores)
    var noDot = dotSplitter.join("");

    for(var j = 0; j < noDot.length; j ++){
        if(!isAlphabetic(noDot[j])){
            return false;
        }
    }

    return true;
}


// isAlphabetic
function isAlphabetic(letter){
    var alphabet = [
        "a","b","c","d","e",
        "f","g","h","i","j",
        "k","l","m","n","o",
        "p","q","r","s","t",
        "u","v","w","x","y",
        "z"
    ];

    return alphabet.indexOf(letter) !== -1
}

// isNumeric
function isNumeric(number) {
    var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];
    return numbers.indexOf(number) !== -1;
}
