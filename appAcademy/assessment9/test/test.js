var assert = require('assert');

var countAdjacentSums = require('../assessment.js').countAdjacentSums,
    inPigLatin = require('../assessment.js').inPigLatin,
    longestLetterStreak = require('../assessment.js').longestLetterStreak;

describe('#countAdjacentSums()', function () {
  it('should count the number of times that two adjacent numbers in an array add up to n.', function () {
    var result = countAdjacentSums([1, 5, 1], 6)
    var expected = 2;
    assert.deepEqual(result, expected);

    result = countAdjacentSums([8, 7, 11, 4, 5, 10, 3], 15)
    expected = 3;
    assert.deepEqual(result, expected);
  });
});

describe('#longestLetterStreak()', function () {
  it('should return the longest consecutive searchLetters found in the str.', function () {
    assert.equal(longestLetterStreak("ACCA", ["C"]), 2);
    assert.equal(longestLetterStreak("YACCADCA", ["C", "A"]), 4);
    assert.equal(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]), 3);
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
