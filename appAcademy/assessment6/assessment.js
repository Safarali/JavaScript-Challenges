/******************************************************************************
** Directions:
**  For each question, replace the blank
**  with a word from the word bank.
**

               -= WORD BANK =-
         | ======================= |
         | first-class, parsing,   |
         | global, module, local,  |
         | file                    |
         | ======================= |

===============================================
 Question #1:
 require('fs') lets the programmer use a node system ____ .
-----------------------------------------------
 Answer #1: module
===============================================
 Question #2:
 require('fs') lets us operate on a file .
-----------------------------------------------
 Answer #2: file
===============================================
 Question #3:
 function parameters are in a function's, or ____, scope.
-----------------------------------------------
 Answer #3: local
===============================================
 Question #4:
 Structuring input into a usable format is known as parsing data.
-----------------------------------------------
 Answer #4: parsing
===============================================
 Question #5:
 In Javascript, a function is a first-class data type.
-----------------------------------------------
 Answer #5: first-class
===============================================
 Question #6:
 Array.prototype.forEach executes its callback function in the ____ scope.
-----------------------------------------------
 Answer #6: global

*/

/******************************************************************************
Write a function myForEach(array, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined.

Do NOT use the built-in Array#forEach method!

Example:
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
function myForEach (arr, cb) {
  for (var i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr);
  }
}

/******************************************************************************
Write a function myMap(array, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. It should return a new array where each element in the new array is the
return value of the callback. Feel free to use the myForEach function you
wrote earlier or Array#forEach.

Do not use a for or while loop!

Examples:
> myMap([1, 2, 3], function(ele, i, arr){
..  return ele * i;
..})
[0, 2, 6] //return value

> myMap([1, 2, 3], function(ele, i, arr){
..  return ("This element is " + ele);
..})
["This element is 1", "This element is 2", "This element is 3"] //return value
******************************************************************************/
function myMap (arr, cb) {
  var newArr = [];

  myForEach(arr, function (ele, idx, arr) {
      newArr.push(cb(ele, idx, arr));
  });
  return newArr;
}

/******************************************************************************
Write a function passingStudents(array) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Use only Array.prototype.forEach to iterate through any array!

Example:
> var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }];

> passingStudents(students)
[ 'Kush', 'Ned' ] //return value
******************************************************************************/
function passingStudents(array) {
  var names = [];
  var total = 0;
  array.forEach(function(ele){
      var grades = ele.grades;

      grades.forEach(function(exam, idx){
          total += exam.score;

          if(idx === grades.length -1){
             if((total/grades.length -1 ) >= 70){
                 names.push(ele.name);
             }
             total = 0;
          }
      });
  });
  return names;
}

/******************************************************************************
Write a function laligatSequence(base, n)

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence.

Examples:
> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

> laligatSequence(5, 2)
[ 5, 10 ]
*******************************************************************************/
function laligatSequence(base, n){
  var seq = [];

  while(seq.length < n) {
      seq.push(base);
      base = laligatSum(base);
  }
  return seq;
}

function laligatSum(number) {
    var sum = 0;
    var i = 2;

    while (i <= number) {
        if(isPrime(i)){ sum += i; }
        i ++;
    }
    return sum;
}

function isPrime(num) {
    if(num < 2){
        return false;
    }

    for (var i = 2; i < num; i++) {
        if(num % i === 0){ return false; }
    }
    return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  myMap : myMap,
  myForEach : myForEach,
  passingStudents: passingStudents,
  laligatSequence : laligatSequence
};
