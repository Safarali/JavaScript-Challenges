


// 1. Max value of array
Array.prototype.max = function () {
    return this.reduce(function(prev, next){
        return Math.max(prev, next);
    });
};

Array.prototype.max = function () {
    max = Array.from(this)[0];

    for (var i = 0; i < this.length; i++) {
        max = max < this[i] ? this[i] : max;
    }
    return max;
};



// 2. isPrime

Number.prototype.isPrime = function () {
    if (Number(this) < 2) {
        return false;
    }
    var num = Number(this);
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// 3. isEven isOdd

Number.prototype.isEven = function () {
    return Number(this) % 2 === 0;
};

Number.prototype.isOdd = function () {
    return Number(this) % 2 !== 0;
};

// 4.  Add to the `String` prototype: - `words`: Returns an array of the sentence's words - `myReverse`: Returns the sentence... _reversed!_

String.prototype.words =  function () {
    return String(this).split(" ");
}

String.prototype.myReverse = function () {
    var reversed = [];
    var words = String(this).words();

    words.forEach(function(word){
        reversed.unshift(word);
    });
    return reversed.join(" ");
};
