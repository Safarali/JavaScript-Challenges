// Log the numbers

function logBetween(lowNum, highNum) {
    for(var i = lowNum; i <= highNum; i ++){
        console.log(i);
    }
}

// isFactorOf

function isFactorOf(number, factor) {
    return (number % factor === 0);
}

// fizzBuzz

function fizzBuzz(max) {
    for(var i = 3; i <= max; i ++) {
        if (i % 3 === 0 || i % 5 === 0){
            if (i % 15 !== 0){
                console.log(i);
            }
        }
    }
}

// isPrime

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for(var i = 2; i < number; i ++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// logEach

function logEach(names) {
    for (var i = 0; i < names.length; i++) {
        console.log(i + ": " + names[i]);
    }
}

// maxValue

function maxValue(array) {
    var max = null;

    for(var i = 0; i < array.length; i ++) {
        if (max < array[i] || max === null) {
            max = array[i]
        }
    }
    return max;
}

// capWords

function capWords(words) {
    var capitalized = [];

    for(var i = 0; i < words.length; i ++){
        capitalized.push(words[i].toUpperCase());
    }

    return capitalized;
}

// firstNPrimes

function firstNPrimes(n) {
    var primes = [], i = 2;
    while (primes.length < n) {
        if (isPrime(i)) {
            primes.push(i);
        }
        i ++
    }
    return primes;
}

// sumOfNPrimes

function sumOfNPrimes(n) {
    var nPrimes = firstNPrimes(n);
    var sum = 0;

    for(var i = 0; i < nPrimes.length; i ++){
        sum += nPrimes[i];
    }
    return sum;
}
