// dynamicFizzBuzz
//Define a function dynamicFizzBuzz(max, num1, num2) that takes three numbers as arguments and prints to the console every number from 0 to max that is divisible by either num1 or num2, but not both.

function dynamicFizzBuzz(max, num1, num2) {
    for(var i = 0; i <= max; i ++){
        if (i % num1 === 0 && i % num2 !== 0) {
            console.log(i);
        } else if (i % num1 !== 0 && i % num2 === 0) {
            console.log(i);
        }
    }
}

//minMaxDifference

//Write a function minMaxDifference(array) that return the difference between the largest value and the smallest value in the array. Assume array is an array of numbers.

function minMaxDifference(array) {
    var min = array[0], max = array[0];

    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max - min;
}


// dogsAndBones
// You have 100 dogs (soo many dogs!). You have arranged all your dogs in a line. Initially, none of your dogs have any bones. You take 100 rounds walking around the dogs, always starting at the beginning. Every time you stop at a dog, you put a bone in it's mouth if it doesn't have one, and you take away a bone if it has one on (so cruel). The first round, you stop at every dog. The second round, you only stop at every 2nd dog (#2, #4, #6, #8, etc.). The third round, you only stop at every 3rd dog (#3, #6, #9, #12, etc.). You continue this process until the 100th round (i.e. you only visit the 100th dog).
//
// Write a program dogsAndBones() that prints which dogs have bones at the end.
//
function dogsAndBones(numDogs) {
    // Initializes the dogs with no bones.
    var dogs = Array(numDogs).fill(false);

    for(var i = 1; i <= numDogs; i ++){
        for(j = 1; j <= numDogs; j ++){
            if (j % i === 0) {
                dogs[j-1] = !dogs[j-1];
            }
        }
    }

    for(var k = 0; k < dogs.length; k ++){
        if(dogs[k]){
            console.log(k + 1);
        }
    }
}



// Fibonacci Sequence

function genFibs(n) {
    var fibs = [0, 1];

    while (fibs.length < n) {
        fibs.push(sumUpLastTwo(fibs));
    }

    return fibs;
}

function sumUpLastTwo(numbers) {
    var lastIdx = numbers.length-1;
    return numbers[lastIdx] + numbers[lastIdx-1];
}

console.log(genFibs(6));
