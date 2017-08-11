/*
### INSTRUCTIONS
#
# Welcome to your Bootcamp Prep mock interview. Over the next 15 minutes, you
# will be given a series of three programming questions. You will have 15 minutes
* to answer as many questions. Write your solution in Ruby, Python, JavaScript, Perl,
# PHP, or Java. We accept partial solutions, and overall logic is more important
# to us than exact syntax, so try not to stress if your solution is incomplete
# or imperfect. Take a deep breath and focus on your approach to the next
# problem.
#
# Talk us through your approach as you work through the problem.  We need to know
# how you communicate the way that you solve problems.  Some people prefer to talk
# while they come to a solution, while other people prefer to walk us through
# after they've done a bit of work.  Either way is fine.
#
# We want to evaluate you on your own work, so the interview is closed-book. You
# are not permitted to consult any outside sources: don't ask others for help,
# search the web for solutions, or refer to any notes or code you may have
# written previously. Don't run your code in any REPL or interpreter, and don't
# share these questions or your solutions with anyone else (even anonymously).
# We take cheating very seriously, and violation is grounds for rejection or
# dismissal from the course.
#
# That said, you may ask your interviewer any questions you might have. We are
# more than happy to help clarify the question or let you know the right syntax
# for the language you're using.
#
# Good luck!
*/

/******************************************************************************
// Write a function concatSandwich(word) which takes a string `word` and returns a
// function that takes three string arguments and returns `word` concatenated between
// the three arguments with spaces separating them.
//
// Example:
// var tofuSandwich = concatSandwich("Tofu") // => [Function]
// tofuSandwich("Hello", "Hey", "Bye") // => "Hello Tofu Hey Tofu Bye"
//
// var hamSandwich = concatSandwich("Ham") // => [Function]
// hamSandwich("Bread", "Lettuce", "Bread") // => "Bread Ham Lettuce Ham Bread"
******************************************************************************/

// Static Solutions, works for only specified number of arguments
function concatSandwich(word) {
    return function (str1, str2, str3) {
        return [str1, word, str2, word, str3].join(" ");
    }
}


// Dynamic solution
function concatSandwich(word) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return args.join(" " + word + " ");
    }
}


/******************************************************************************
// Write the function countAdjacentSums(arr, n) which takes an array and number.
// It should count the number of times that two adjacent numbers in an array add up
// to n. Use Array#forEach.
//
// Examples:
// > countAdjacentSums([1, 5, 1], 6)
// 2
//
// > countAdjacentSums([7, 2, 4, 6], 7)
// 0
//
// > countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)
// 3
******************************************************************************/

function countAdjacentSums(arr, n) {
    var count = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if(arr[i] + arr[i + 1] === n){
            count += 0;
        }
    }
    return count;
}

/******************************************************************************
// Isogram Matcher
//
// An isogram is a word with only unique, non-repeating letters.
//
// Given two isograms of the same length, return an array with two numbers
// indicating matches: the first number is the number of letters matched in both
// words at the same position, and the second is the number of letters matched in
// both words but not in the same position.
//
// Examples:
console.log(isogramMatcher("an", "at")) // [1, 0]
console.log(isogramMatcher("or", "go")) // [0, 1]
console.log(isogramMatcher("cat", "tap")) // [1, 1]
console.log(isogramMatcher("home", "dome")) // [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")) // [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")) // [1, 8]
******************************************************************************/

function isogramMatcher(str1, str2) {
    var match = [0, 0];

    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            match[0] ++;
        }else if (str2.indexOf(str1[i]) !== -1) {
            match[1] ++;
        }
    }
    return match;
}
