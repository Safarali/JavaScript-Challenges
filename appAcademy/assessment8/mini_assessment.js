/******************************************************************************
Write a function divisibleByNPairSum(array, n) that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of n.

!! Use Array.prototype.forEach

> divisibleByNPairSum([1, 6, 3, 4, 2, 0], 3);
[ [ 0, 4 ], [ 1, 2 ], [ 1, 5 ], [ 2, 5 ], [ 3, 4 ] ]

> divisibleByNPairSum([8, 3, 5, 9, 2], 10);
[ [ 0, 4 ] ]

******************************************************************************/
function divisibleByNPairSum(array, n) {
    var pairs = [];

    array.forEach(function (ele, i) {
        array.forEach(function (ele1, j) {
            var sum = ele + ele1;
            if (j > i && (sum % n === 0)) {
                pairs.push([i, j]);
            }
        });
    });
    return pairs;
}


/*******************************************************************************
# Greatest Common Factor
# ------------------------------------------------------------------------------
# Return the greatest number which is a factor of both inputs.
#
# The greatest common factor of 6 and 10 is 2
# the greatest common factor of 10 and 15 is 5

Examples
greatestCommonFactor(6, 10) => 2
greatestCommonFactor(10, 15) => 5
greatestCommonFactor(4, 7) => 1
greatestCommonFactor(4, 8) => 4
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
    var point = null;
    point = num1 < num2 ? num1 : num2;

    while (true) {
        if (num1 % point === 0 && num2 % point === 0) {
            return point;
        }
        point --;
    }
}


/*******************************************************************************
Two Degrees of Separation
------------------------------------------------------------------------------
You have a hash that represents all of Facebook.  Each key is the
name of a person on facebook, and each value is an array of all their friends.
Assume everyone on Facebook has a different name.

Given Facebook and the name of a person, return an array of all the friends
of their friends. Do not include the original person or their immediate friends.

Example 1
var facebook_1 = {
  "Harry Potter" : ["Ron Weasley"],
  "Ron Weasley" : ["Harry Potter", "Fred Weasley"],
  "Fred Weasley" : ["Ron Weasley"]
}

twoDegreesAway(facebook_1, "Harry Potter"); //=> ["Fred Weasley"]);

Example 2
facebook_2 = {
  "Mark Zuckerberg" : ["Eduardo Saverin", "Dustin Moskovitz", "Sean Parker"],
  "Eduardo Saverin" : ["Mark Zuckerberg", "Tyler Winklevoss", "Cameron Winklevoss", "Dustin Moskovitz"],
  "Tyler Winklevoss" : ["Eduardo Saverin"],
  "Cameron Winklevoss" : ["Eduardo Saverin"],
  "Dustin Moskovitz" : ["Mark Zuckerberg", "Eduardo Saverin"],
  "Sean Parker" : ["Mark Zuckerberg"]
}

twoDegreesAway(facebook_2, "Mark Zuckerberg"); //=> ["Tyler Winklevoss", "Cameron Winklevoss"]);
*******************************************************************************/

function twoDegreesAway(facebook, person) {
    var awayFriends = [];

    for(var user in facebook){
        var friends = facebook[user];
        for (var i = 0; i < friends.length; i++) {
            var friend = friends[i];
            if (person !== user && person !== friend) { // Skips person's friends
                if (awayFriends.indexOf(friend) === -1 && facebook[person].indexOf(friend) === -1) {
                    awayFriends.push(friend);
                }
            }
        }
    }
    return awayFriends;
}
