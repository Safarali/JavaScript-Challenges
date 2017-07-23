/******************************************************************************
** Directions:
**  For each question, replace the blank
**  with a word from the word bank.
**

              -= WORD BANK =-
         | ================== |
         | * multidimensional |
         | * null             |
         | * composite        |
         | * NaN              |
         | * nested           |
         | * undefined        |
         | ================== |

===============================================
 Question #1:
 Accessing an object at an undeclared key evaluates to what value?
-----------------------------------------------
 Answer #1: undefined
===============================================

===============================================
 Question #2:
 What is the result of a illegal mathematical operation? ("cat" * 42)
-----------------------------------------------
 Answer #2: NaN
===============================================

===============================================
 Question #3:
 This value represents an explicit absence or termination.
-----------------------------------------------
 Answer #3: null
===============================================

===============================================
 Question #4:
 An array of arrays is called a [blank] array. Fill in the [blank]
-----------------------------------------------
 Answer #4: multidimensional
===============================================

===============================================
 Question #5:
 A loop inside a loop is called a [blank] loop. Fill in the [blank]
-----------------------------------------------
 Answer #5: nested
===============================================

===============================================
 Question #6:
 Objects and arrays consists of other data. For this reason, they are called [blank] data types. Fill in the [blank]
-----------------------------------------------
 Answer #6: composite
 ===============================================
*/

/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.
** Example
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [ 0, 4 ], [ 1, 3 ] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/

function divisibleByFivePairSum(array){
  var pairs = [];

  for(var i = 0; i < array.length; i ++){
      for(var j = i + 1; j < array.length; j ++){
          if ((array[i] + array[j]) % 5 === 0){
              pairs.push([i, j]);
          }
      }
  }
  return pairs;
}

/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects)
**
** DO NOT USE THE BUILT IN 'Array.prototype.indexOf' method!!!
**
** Example
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
  for(var i = 0; i < array.length; i ++){
      if (array[i] === ele){
          return i;
      }
  }
  return -1;
}

/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher){
  var decoded = "";

  for(var i = 0; i < sentence.length; i ++){
      var char = sentence[i];

      if (cipher[char]) {
          decoded += cipher[char];
      } else {
          decoded += char;
      }
  }
  return decoded;
}

/******************************************************************************
** Write a function `minMaxDifference(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Example
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([5,4,3,2,1]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/
function minMaxDifference(array){
  var max = array[0], min = array[0];

  for (var i = 0; i < array.length; i++) {
      if (max < array[i]){
          max = array[i];
      }

      if (min > array[i]){
          min = array[i];
      }
  }
  return max - min;
}

/******************************************************************************
** Write a function #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.
** Example
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*/
function dynamicFizzBuzz(max, num1, num2){
  var array = [];

  for (var i = 0; i < max; i++) {
      if (i % num1 === 0 && i % num2 !== 0){
          array.push(i);
      } else if (i % num1 !== 0 && i % num2 === 0) {
          array.push(i);
      }
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  divisibleByFivePairSum : divisibleByFivePairSum,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxDifference : minMaxDifference,
  dynamicFizzBuzz : dynamicFizzBuzz
};
