
// 1. arrayBuilder
// Write a function `arrayBuilder` that takes in a count object and returns
// an array filled with the appropriate numbers of elements. The order of
// the elements in the array does not matter, but repeated elements should be
// grouped.
//
// Examples:
// arrayBuilder({'a': 3, 'b': 0, 'c': 2}); //=> [ 'a', 'a', 'a', 'c', 'c' ]
// arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
// arrayBuilder({}); //=> []


function arrayBuilder(obj) {
    var arr = [];

    for(var key in obj){
        var val = obj[key];
        var i = 1;
        while (val > 0 && i <= val) {
            arr.push(key);
            i += 1;
        }
    }
    return arr;
}


// 2. objectTo2DArray
// Write a function `objectTo2DArray` that takes in a object and returns an array
// that contains subarrays of length 2. Each subarray should contain a key and it's
// corresponding value from the object.
//
// Examples:
//
// var array = objectTo2DArray({'app': 'academy', 'age': 5});
// array; //=> [[ 'app', 'academy' ], [ 'age', 5 ]]


function objectTo2DArray(obj) {
    var array2D = [];
    for(var key in obj){
        array2D.push([key, obj[key]]);
    }

    return array2D;
}



// 3. highestScore
// Write a function highestScore(students) that takes in an array of student objects
// as a parameter. It should return a string that corresponds to the student with
// the highest score. The string should contain that student's initials
// concatenated with their id. Assume the array contains at least 1 student object and
// the student with the highest score is unique (there are no ties).
//
// Example:
// var students = [
//  {name: 'Alvin Zablan', id: 128, score: -42},
//  {name: 'Eliot Bradshaw', id: 32, score: 57},
//  {name: 'Tommy Duek', id: 2, score: 99},
//  {name: 'Fred Sladkey', id: 256, score: 94}
// ];

function highestScore(students) {
    var highestStudent = students[0]

    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        if (highestStudent.score < student.score) {
            highestStudent = student;
        }
    }

    var splitName = highestStudent.name.split(" ");
    return splitName[0][0] + splitName[1][0] + highestStudent.id;
}



// 4. countRepeats
// Write a function countRepeats(string) that takes in a string and returns the
// number of letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of letters that
// repeat, not the number of times they repeat in the string.
//
// Examples:
//
// countRepeats('alvin'); //=> 0
// countRepeats('aaaalvin'); //=> 1
// countRepeats('pops'); //=> 1
// countRepeats('mississippi'); //=> 3
// countRepeats('hellobootcampprep'); //=> 4

function countRepeats(string) {
    var count = {};

    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        count[char] ? count[char] += 1 : count[char] = 1;
    }

    var repeats = 0;

    for(var key in count){
        if(count[key] > 1){ repeats += 1;}
    }
    return repeats;
}



// 5. totalAttendance
// Write a function `totalAttendance` that takes in a roster (array) and absences (object)
// as parameters. The absences object contains days as its keys. The corresponding
// value for each key is an array containing students that were absent for that day.
// The function should return an object where keys correspond to students and
// the values correspond to their total attendance.
//
// Example:
var roster = ['Alvin', 'Phi', 'Tommy', 'Fred'];
var absences = {
  'w1d1': ['Alvin', 'Fred'],
  'w1d2': [],
  'w1d3': ['Alvin', 'Tommy'],
  'w1d4': ['Fred'],
  'w1d5': ['Alvin']
};

// totalAttendance(roster, absences); //=> {Alvin: 2, Phi: 5, Tommy: 4, Fred: 3}

function totalAttendance(roster, absences) {
    var attendance = {};
    var numDays = Object.keys(absences).length;
    for (var i = 0; i < roster.length; i++) {
        var name = roster[i];
        attendance[name] = numDays;
        for (var day in absences) {
            if(absences[day].indexOf(name) !== -1){
                attendance[name] -= 1;
            }
        }
    }
    return attendance;
}
