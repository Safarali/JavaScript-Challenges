/******************************************************************************
** Directions:
**  For each question, replace the blank
**  with a word from the word bank.
**

          -= WORD BANK =-
         | ============== |
         | * indexOf      |
         | * split        |
         | * key          |
         | * modulo       |
         | * initialize   |
         | * join         |
         | ============== |

===============================================
 Question #1:
 To declare a variable and set its value.
-----------------------------------------------
 Answer #1: initialize
===============================================

===============================================
 Question #2:
 Which operator gives the remainder of division?
-----------------------------------------------
 Answer #2: modulo
===============================================

===============================================
 Question #3:
 Objects contain [blank]-value pairs? Fill in the [blank]
-----------------------------------------------
 Answer #3: key
===============================================

===============================================
 Question #4:
 A method that transforms an array into a string. Takes an optional string argument that will be placed in between each element
-----------------------------------------------
 Answer #4: join
===============================================

===============================================
 Question #5:
 A method that transforms a string into an array. Takes an optional string argument that's used as the dividing point
-----------------------------------------------
 Answer #5: split
===============================================

===============================================
 Question #6:
 A method that accepts a value and returns the index of that value in the string/array, or -1 if it's not there.
-----------------------------------------------
 Answer #6: indexOf
===============================================
*/

/******************************************************************************
** Write a function range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order.
** Examples:
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/

function range(start, end){
    var rangeArr = [];

    if (start > end) {
      return [];
    }

    while (start <= end) {
      rangeArr.push(start);
      start += 1;
    }

    return rangeArr;

}

/******************************************************************************
** Write a function unique(array) that returns an array where all the duplicates
** of the input array have been removed; in other words, every element remaining
** is unique.
** Example:
** unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*/

function unique(array){
  var uniqueArr = [];

  for (var i = 0; i < array.length; i++) {
      if (uniqueArr.indexOf(array[i]) === -1) {
          uniqueArr.push(array[i]);
      }
  }
  return uniqueArr;
}

console.log(unique([1, 1, 2, 3, 3]));

/******************************************************************************
** Write a function elementCount(array) that returns an object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.
** Example:
** elementCount(["a", "a", "a", "b"]) => { "a" : 3, "b" : 1 }
*/

function elementCount(array){
  var count = {};

  for(var i = 0; i < array.length; i ++){
      var ele = array[i];

      if (count[ele] === undefined) {
          count[ele] = 1
      } else {
          count[ele] += 1;
      }
  }
  return count;
}

/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  var words =  sentence.split(" ");
  var reversed = [];

  for (var i = 0; i < words.length; i++) {
      reversed.unshift(words[i]);
  }
  return reversed.join(" ");
}

/******************************************************************************
** Write a function fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example:
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*/
function fizzBuzz(max){
  var arr = [];

  var i = 3;
  while (i < max) {
      if(i % 3 === 0 || i % 5 === 0 ){
          if(i % 15 !== 0){
             arr.push(i);
          }
      }
      i ++;
  }
  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
