var assert = require('assert');
var extractQuestionAndAnswer = require('./helper.js').extractQuestionAndAnswer;

var reverseRange = require('../assessment.js').reverseRange,
    royalWe = require('../assessment.js').royalWe,
    elementCount = require('../assessment.js').elementCount,
    reverseSentence = require('../assessment.js').reverseSentence,
    magicNumbers = require('../assessment.js').magicNumbers;

describe('Word Bank', function(){
  [861, 985, 557, 405, 178, 287].forEach(function(e, i){
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

describe('#royalWe()', function () {
  it('should replace "I" with "we"', function () {
    var result = royalWe("I want to go to the store");
    var expected = "we want to go to the store";
    assert.equal(result, expected);
  });

  it('should replace "my" with "our"', function () {
    var result = royalWe("Jump for my love");
    var expected = "Jump for our love";
    assert.equal(result, expected);
  });

  it('should replace "me" with "us"', function () {
    var result = royalWe("This is my house and you will respect me");
    var expected = "This is our house and you will respect us";
    assert.equal(result, expected);
  });

  it('should replace "mine" with "ours"', function () {
    var result = royalWe("This is mine");
    var expected = "This is ours";
    assert.equal(result, expected);
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


describe('#reverseRange()', function () {
  it('should return array of numbers between "start" and "end" in reverse order', function () {
    var result = reverseRange(1, 5);
    var expected = [4, 3, 2];

    assert.deepEqual(result, expected);
  });

  it('should return empty array if "start" > "end"', function () {
    assert.equal(reverseRange(5, 1).length, 0);
  });
});


describe('#reverseSentence()', function () {
  it('should return the input string with the words reversed', function () {
    var result = reverseSentence("I want to go to the store");
    var expected = "store the to go to want I";

    assert.equal(result, expected);
  });
});


describe('#magicNumbers()', function () {
  it('should return array of all fizzbuzz numbers under max', function () {
    var result = magicNumbers(20);
    var expected = [4, 6, 8, 16, 18];
    assert.deepEqual(result, expected);
  });
});
