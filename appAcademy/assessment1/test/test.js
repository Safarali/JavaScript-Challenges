var assert = require('assert');
var extractQuestionAndAnswer = require('./helper.js').extractQuestionAndAnswer;

var range = require('../assessment.js').range,
    unique = require('../assessment.js').unique,
    elementCount = require('../assessment.js').elementCount,
    reverseSentence = require('../assessment.js').reverseSentence,
    fizzBuzz = require('../assessment.js').fizzBuzz;

describe('Word Bank', function(){
  [74, 656, 329, 432, 556, 749].forEach(function(e, i){
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

describe('#range()', function () {
  it('should return array of numbers between "start" and "end"', function () {
    var result = range(1, 5);
    var expected = [1,2,3,4,5];

    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      assert.equal(result[i], expected[i]);
    }
  });

  it('should return empty array if "start" > "end"', function () {
    assert.equal(range(5, 1).length, 0);
  });
});

describe('#unique()', function () {
  it('should remove duplicate elements', function () {
    var result = unique([1 , 2, 3, "3", 2, 1, 13]);
    var expected = [1, 2, 3, "3", 13];

    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      assert.equal(result[i], expected[i]);
    }
  });
});

describe('#elementCount()', function () {
  it('should return hash with element ad key and # of occurences as value', function () {
    var result = elementCount(["a", "b", "a", "a", "c", "b"]);
    var expected = { "a" : 3, "b" : 2, "c" : 1 };

    var count = 0;

    for(var x in result){
      if(result.hasOwnProperty(x)){
        count += 1;
        assert.equal(result[x], expected[x]);
      }
    }

    assert.equal(count, 3);
  });
});

describe('#reverseSentence()', function () {
  it('should return the input string with the words reversed', function () {
    var result = reverseSentence("I want to go to the store");
    var expected = "store the to go to want I";

    assert.equal(result, expected);
  });
});

describe('#fizzBuzz()', function () {
  it('should return array of all fizzbuzz numbers under max', function () {
    var result = fizzBuzz(20);
    var expected = [3, 5, 6, 9, 10, 12, 18];
    assert.equal(result.length, expected.length);

    for(var i = 0; i < result.length; i += 1){
      assert.equal(result[i], expected[i]);
    }
  });
});
