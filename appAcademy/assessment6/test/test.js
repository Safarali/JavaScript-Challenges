var assert = require('assert')
  , fs     = require('fs');

var myForEach = require('../assessment.js').myForEach,
    myMap = require('../assessment.js').myMap,
    passingStudents = require("../assessment.js").passingStudents,
    laligatSequence = require('../assessment.js').laligatSequence;

describe('#WordBank', function(){
    function extractQAs(cb){
    fs.readFile('assessment.js', 'utf8', function(err, data){
        var charTotal = word => word.toLowerCase().split('').filter(x => x !== "_").reduce((a, c) => a + c.charCodeAt(), 0) % 1000;

        var parsed = data.match(/Question.*\n(.*)\n-*\n.*Answer.*?:\s*(.*?)\n/ig)
            .map(x => x.replace(/Question.*\n(.*)\n-*\n.*Answer.*?:\s*(.*?)\n/ig, "$1 ## $2")
            .replace(/\=+/, "____").replace(/["']/g, ''));

        var QAHset = parsed.map(pair =>
            (qaArr =>
                ({Q: qaArr[0].trim(), A: qaArr[1].trim(), H: charTotal(qaArr[1].trim())})
            )(pair.split('##'))
        );

        cb(QAHset);
    })}

    [646, 416, 523, 756, 131, 625].forEach((e, i) =>
    it("Word Bank Question #" + (i + 1), function(done){
        extractQAs(function (set){
            try {
                assert.equal(e === set[i].H, !0,
                            ': "'+ set[i].Q + '"\tA: "' + set[i].A + '"');
            } catch (e) {
                throw e.name == "AssertionError" ? { message: "Incorrect answer " + e.message } : e;
            }
            done();
        });
    }));
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

  var text = myForEach.toString();

  it('Should not use Array.prototype.forEach', function(){
      assert(!text.match(/\.forEach/), "Solution is using the built-in .forEach")
  });

});

describe('#myMap()', function () {
  it('should return array of all elements passed to the callback', function () {
    var expected = ["This element is 1", "This element is 2", "This element is 3"];
    var result = myMap([1, 2, 3], function(ele, i, arr){
      return ("This element is " + ele);
    });

    assert.deepEqual(result, expected);
  });

  it('should pass in the index and the array to the callback', function () {
    var expected = [0, 2, 6];
    var result = myMap([1, 2, 3], function(ele, i, arr){
      return ele * i;
    });

    assert.deepEqual(result, expected);
  });
});

describe('#passingStudents()', function() {
  it('should return an array of the names of all the passing students', function() {
    var students = [
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
    var expected = ["Kush", "Ned"];
    var result = passingStudents(students);
    assert.deepEqual(result, expected);
  })

  var text = passingStudents.toString();

  it('Should only Array.prototype.forEach', function(){
      assert(!text.match(/for[^e]*\(/i), "Solution is using a for loop");

      assert(!text.match(/while\s*\(/i), "Solution is using a while loop");
  });
})

describe('#laligatSequence()', function () {
  it('should return the laligat sequence starting with base and of length n.', function () {
    var result = laligatSequence(10, 4);
    var expected = [ 10, 17, 58, 381 ];
    assert.deepEqual(result, expected);

    result = laligatSequence(5, 2);
    expected = [ 5, 10 ];
    assert.deepEqual(result, expected);

    result = laligatSequence(5, 0);
    expected = [];
    assert.deepEqual(result, expected);
  });
});
