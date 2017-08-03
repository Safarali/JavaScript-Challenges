var assert = require('assert');
var extractQuestionAndAnswer = require('./helper.js').extractQuestionAndAnswer;

var myForEach = require('../assessment.js').myForEach,
    mySelect = require('../assessment.js').mySelect,
    inPigLatin = require('../assessment.js').inPigLatin;

describe('Word Bank', function(){
  [227, 324, 216, 765, 813, 413].forEach(function(e, i){
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

describe('#myForEach()', function () {
  var elements = [1,2,3];

  it('should pass the callback each element', function () {
    var expected = [1,2,3];
    var test = [];

    myForEach(elements, function(ele){
      test.push(ele);
    });

    assert.deepEqual(test, expected);
  });

  it('should pass the callback each index', function () {
    var expected = [0,1,2];
    var test = [];

    myForEach(elements, function(ele, i){
      test.push(i);
    });

    assert.deepEqual(test, expected);
  });

  it('should pass the callback the array', function () {
    var expected = [[1,2,3],[1,2,3],[1,2,3]];
    var test = [];

    myForEach(elements, function(ele,i,arr){
      test.push(arr);
    });

    assert.deepEqual(test, expected);
  });
});

describe('#mySelect()', function () {
  it('return array of all elements that evaluated to true', function () {
    var expected = [true, 1, "happy"];
    var result = mySelect([true, false, 1, 0, "", "happy"], function(ele){
      return ele;
    });

    assert.deepEqual(result, expected);
  });

  it('should pass in the index and the array to the callback', function () {
    var expected = [5, -22];
    var result = mySelect([5,12,-22,-3], function(ele, i, arr){
      return i % 2 === 0;
    });

    assert.deepEqual(result, expected);
  });
});

describe('#inPigLatin()', function () {
  it('should translate a sentence into pig latin.', function () {
    var result = inPigLatin("Shmanthony is the best teacher");
    var expected = "Anthonyshmay isyay ethay estbay eachertay";
    assert.equal(result, expected);

    result = inPigLatin("let us Dance");
    expected = "etlay usyay Anceday";
    assert.equal(result, expected);

    result = inPigLatin("this is the time of my life");
    expected = "isthay isyay ethay imetay ofyay myay ifelay";
    assert.equal(result, expected);
  });
});
