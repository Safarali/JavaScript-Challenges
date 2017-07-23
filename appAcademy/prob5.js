//Write a function factorial(n), that returns the factorial of the number n. Example: factorial(4) => 4 * 3 * 2 * 1 => 24

function factorial(n) {
    var result = 1;

    while (n > 1) {
        result *= n;
        n -= 1
    }
    return result;
}


//Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

function longWordCount(string) {
    var words = string.split(" ");
    var count = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 7) {count += 1}
    }
    return count;
}


// Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both inputs.

function lcm(num1, num2) {
    var least = num2;
    if(num1 > num2){
        least = num1;
    }

    while (true) {
        if(least % num1 === 0 && least % num2 === 0){
            return least;
        }
        least += 1;
    }
}


//Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

function hipsterfy(sentence) {
    var words = sentence.split(" ");
    var hipsterfied = [];

    for(var i = 0; i < words.length; i ++){
        hipsterfied.push(hipsterfyWord(words[i]));
    }
    return hipsterfied.join(" ");
}

function hipsterfyWord(word) {
    var vowels = "aeiou";

    for(var i = word.length-1; i >= 0; i --){
        var char = word[i];

        if (vowels.indexOf(word[i]) !== -1) {
            word = word.slice(0, i) + word.slice(i + 1);
            return word;
        }
    }
    return word;
}


/***************************************************************************
Write a function arraySumN(ary, n) which takes as ary a 2-dimensional array
and as n a number. ary is an array of arrays of numbers. The function returns
the indices of the inner arrays whose elements sum to n. */

function arraySumN(ary, n) {
    var indicesSumToN = [];

    for(i = 0; i < ary.length; i ++){
        var innerArr = ary[i];

        if (sumUp(innerArr) === n) {
            indicesSumToN.push(i);
        }
    }
    return indicesSumToN;
}

function sumUp(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}


/***************************************************************************
Write a function concatObjects(obj1, obj2) which "concatenates" two objects.
It returns an object containing all of the keys found in both obj1 and
obj2. If a key appears in both obj1 and obj2, its value is the concatenation
of its values in obj1 and obj2. Otherwise, a key's value is its value
in the original object. Do not modify the arguments.
Example 1:
var cat1 = {name: "hello", bow: "pink"};
var cat2 = {name: "kitty", color: "white"};
var cat3 = concatObjects(cat1, cat2);
cat3; // => { name: "hellokitty", bow: "pink", color: "white"}
Example 2:
var splash = { pointGuard: "Steph", shootingGuard: "Klay", team: "Warriors"};
var brothers = { pointGuard: "Curry", shootingGuard: "Thompson"};
concatObjects(splash, brothers); // => { pointGuard: "StephCurry", shootingGuard: "KlayThompson", team: "Warriors"}
***************************************************************************/

function concatObjects(obj1, obj2) {
    var concatted = {};

    for(var key in obj1){
        if(obj2[key] !== undefined){
            concatted[key] = obj1[key] + obj2[key];
        } else {
            concatted[key] = obj1[key];
        }
    }

    for(var key1 in obj2){
        if(obj1[key1] === undefined){
            concatted[key1] = obj2[key1];
        }
    }

    return concatted;
}
