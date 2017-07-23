var assert = require('assert');
var extractQuestionAndAnswer = require('./helper.js').extractQuestionAndAnswer;

var divisibleByFivePairSum = require('../assessment.js').divisibleByFivePairSum,
    myIndexOf = require('../assessment.js').myIndexOf,
    magicCipher = require('../assessment.js').magicCipher,
    minMaxDifference = require('../assessment.js').minMaxDifference,
    dynamicFizzBuzz = require('../assessment.js').dynamicFizzBuzz;

describe('Word Bank', function(){
  [946, 317, 443, 726, 643, 979].forEach(function(e, i){
    it("Word Bank Question #" + (i + 1), function(done){
        extractQuestionAndAnswer(function (set){
          try {
              assert.equal(e, set[i].H);
          } catch (e) {
              throw e.name == "AssertionError" ? { message: "Incorrect answer " + e.message } : e;
          }

          done();
        });
    })
  });
});

describe('#divisibleByFivePairSum()', function () {
  it('should return an array of all the pairs of indices whose sum is a multiple of five', function () {
    var result1 = divisibleByFivePairSum([1, 5, 2, 0, 4])
    var result2 = divisibleByFivePairSum([13, 22, 8, -3, 12])
    var expected1 = [[ 0, 4 ], [ 1, 3 ]];
    var expected2 = [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]];
    assert.deepEqual(result1, expected1);
    assert.deepEqual(result2, expected2);
  });

  it('should return an array empty array if no pairs exist', function () {
    var result1 = divisibleByFivePairSum([7, 7, 7, 7])
    var expected1 = [];
    assert.deepEqual(result1, expected1);
  });
});


describe('#myIndexOf()', function () {
  it('should return the index of the element in the array', function () {
    assert.equal(myIndexOf([1,2,3,4,5], 5), 4);
    assert.equal(myIndexOf(["a", "b", "c"], "a"), 0);
  });

  it('should return -1 if element does not exist', function () {
    assert.equal(myIndexOf(["a", "b", "c"], "d"), -1);
  });
});


describe('#magicCipher()', function () {
  it('should return a string where every character is replaced with its corresponding value in the cipher', function () {
    var result = magicCipher("add me on facebook" , { a : "c", d : "q"});
    var expected = "cqq me on fccebook";
    assert.equal(result, expected);

    var result = magicCipher("where are you?" , { v : "l", '?' : "!"});
    var expected = "where are you!";
    assert.equal(result, expected);

    var result = magicCipher("twmce" , { m : "n", t : "d", w : "a"});
    var expected = "dance";
    assert.equal(result, expected);
  });
});


describe('#minMaxDifference()', function () {
  it('should return the difference of the min and max value of the array.', function () {
    assert.equal(minMaxDifference([1,2,3,4,5]), 4);
    assert.equal(minMaxDifference([5,4,3,2,1]), 4);
    assert.equal(minMaxDifference([4,2,5,1,-5]), 10);
  });
});


describe('#dynamicFizzBuzz()', function () {
  it('should return array of all fizzbuzz numbers under max', function () {
    var result = dynamicFizzBuzz(20, 5, 3);
    var expected = [3, 5, 6, 9, 10, 12, 18];
    assert.deepEqual(result, expected);
    var result = dynamicFizzBuzz(20, 4, 6);
    var expected = [4, 6, 8, 16, 18];
    assert.deepEqual(result, expected);
    var result = dynamicFizzBuzz(50, 7, 13);
    var expected = [ 7, 13, 14, 21, 26, 28, 35, 39, 42, 49 ];
    assert.deepEqual(result, expected);
  });
});
