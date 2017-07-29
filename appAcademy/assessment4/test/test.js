var assert = require('assert');
var extractQuestionAndAnswer = require('./helper.js').extractQuestionAndAnswer;

var leastCommonMultiple = require('../assessment.js').leastCommonMultiple,
    myIndexOf = require('../assessment.js').myIndexOf,
    magicCipher = require('../assessment.js').magicCipher,
    minMaxProduct = require('../assessment.js').minMaxProduct,
    hipsterfy = require('../assessment.js').hipsterfy;

describe('Word Bank', function(){
  [543, 631, 538, 901, 440, 641].forEach(function(e, i){
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

describe('#myIndexOf()', function () {
  it('should return the index of the element in the array', function () {
    assert.equal(myIndexOf([1,2,3,4,5], 5), 4);
    assert.equal(myIndexOf(["a", "b", "c"], "a"), 0);
    assert.equal(myIndexOf([false, true, true, false], true), 1);
  });

  it('should return -1 if element does not exist', function () {
    assert.equal(myIndexOf(["a", "b", "c"], "d"), -1);
  });
});

describe('#minMaxProduct()', function () {
  it('should return the product of the min and max value of the array.', function () {
    assert.equal(minMaxProduct([1,2,3,4,5]), 5);
    assert.equal(minMaxProduct([5,4,3,2,1]), 5);
    assert.equal(minMaxProduct([4,2,5,1,-5]), -25);
  });
});


describe('#leastCommonMultiple()', function () {
  it('should return the lowest number which is a multiple of both inputs', function () {
    var result1 = leastCommonMultiple(2,3);
    var result2 = leastCommonMultiple(6,10);
    var result3 = leastCommonMultiple(24,26);

    assert.equal(result1, 6);
    assert.equal(result2, 30);
    assert.equal(result3, 312);
  });
});


describe('#hipsterfy()', function () {
  it('should remove the last vowel from each word.', function () {
    var result = hipsterfy("proper tonic panther");
    var expected = "propr tonc panthr";
    assert.equal(result, expected);

    var result = hipsterfy("towel flicker banana");
    var expected = "towl flickr banan";
    assert.equal(result, expected);

    var result = hipsterfy("turtle cheeseburger fries");
    var expected = "turtl cheeseburgr fris";
    assert.equal(result, expected);
  });
});

describe('#magicCipher()', function () {
  it('should return a string where every character is replaced with its cooresponding value in the cipher', function () {
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
