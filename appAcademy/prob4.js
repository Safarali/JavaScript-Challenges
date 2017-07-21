//================Data modelling===============//

//Write a function that will print the name of all the students

// var students1 = [
//   { name : "Anthony" },
//   { name : "Winnie" },
//   { name : "Pawandeep" }
// ];

function printNames(students) {
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        console.log(student.name);
    }
}


//Write a function that will print the name and id of all the students

// var students2 = [
//   {
//     name : "Anthony",
//     id : 0
//   }, {
//     name : "Winnie",
//     id : 1
//   }, {
//     name : "Pawandeep",
//     id : 2
//   }
// ];

function printStudents(students) {
    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        console.log(student.name + " is student " + student.id );
    }
}


//Write a function that will print the name of the student and their highest test score

// var students3 = [
//   {
//     name : "Anthony",
//     id : 0,
//     grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
//   }, {
//     name : "Winnie",
//     id : 1,
//     grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
//   }, {
//     name : "Pawandeep",
//     id : 2,
//     grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
//   }
// ];

function printBestGrade(students) {

    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var bestGrade = getBestGrade(student.grades);

        console.log(student.name, bestGrade);
    }
}

function getBestGrade(grades) {
    var bestScore = grades[0].score

    for (var i = 0; i < grades.length; i++) {
        var grade = grades[i];
        if (bestScore < grade.score) {
            bestScore = grade.score;
        }
    }
    return bestScore;
}



//Write a function that will print the name of the student and their average test score

function printAverageGrades(students) {
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var averageGrade = getAverageGrade(student.grades);

        console.log(student.name, averageGrade);
    }
}

function getAverageGrade(grades) {
    var totalScores = 0;

    for(var i = 0; i < grades.length; i ++){
        var grade = grades[i];
        totalScores += grade.score;
    }

    return totalScores / grades.length;
}


//Write a function that will print the id of each test and the name of the student
//who got the highest scores

function printBestStudents(students) {
    var bestScores = {};

    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        for(var j = 0; j < student.grades.length; j ++){
            var grade = student.grades[j];

            if(bestScores[grade.id] === undefined){
                bestScores[grade.id] = {name: student.name, score: grade.score};
            }
            else if (bestScores[grade.id].score < grade.score) {
                bestScores[grade.id] = {name: student.name, score: grade.score};
            }
        }
    }

    for(var id in bestScores){
        console.log("Test", id, ":", bestScores[id].name);
    }
}


//================== Create Data Objects according to functions ================//
// 1
function printUsers (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.id + ": " + user.username);
  }
}

var users = [
    {id: 1, username: "username1"}, {id: 2, username: "username2"}
];


// 2

function printUsersWebsites (userWebsites) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++) {
      var site = user.sites[j];
      console.log("  -" + site.url);
    }
  }
}


var userWebsites = [
    { username: "username1", sites: [{url: "me.com"}, {url: "ali.com"}] }
];

// 3

function printUsersWebsitesInfo (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++) {
      var site = user.sites[j];
      console.log("  -" + site.url);
      console.log("    -load: " + site.load + "%");
      console.log("    -# of users: " + site.userCount);
      console.log("    -popularity score: " + site.pop);
    }
  }
}

var userWebsitesInfo = [
    {
        username: "username1",
        sites: [
            {url: "ali.com", load: 35, userCount: 10012, pop: 12}
        ]
    },{
        username: "username2",
        sites: [
            {url: "alibaba.com", load: 3, userCount: 1012, pop: 1}
        ]
    }
]
