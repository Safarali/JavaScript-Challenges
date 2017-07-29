// Clock
//
// For this mini-project, you will create a clock that ticks every second, displaying the current time.
//
// READ ALL OF THE INSTRUCTIONS FIRST! Ask questions if you don't understand something.
//
// Create a clock object;
//
// Give it a property totalSeconds that starts at 0;
//
// Write a method getSeconds that will return the second count of our clock. It should return a value from 00 to 59, just like a normal clock.
//
// hint: Think about this is terms of totalSeconds. If totalSeconds equals 10, then this method should return "10". If totalSeconds is 61 (01:01), this method should return "01".
//
// hint: Play with the modulus operator. If I modulo x by i (x % i), will the result ever be greater than i?
//
// hint: If the value is less than 9, you may have to append a 0 to the beginning
//
// Test your getSeconds method. Open node and manually set the totalSeconds and make sure getSeconds is giving you the right value. Test cases below:
// If clock.totalSeconds = 0, clock.getSeconds() will evaluate to "00"
//
// If clock.totalSeconds = 9, clock.getSeconds() will evaluate to "09"
//
// If clock.totalSeconds = 13, clock.getSeconds() will evaluate to "13"
//
// If clock.totalSeconds = 60, clock.getSeconds() will evaluate to "00"
//
// If clock.totalSeconds = 1342, clock.getSeconds() will evaluate to "22"
//
// Write a method getMinutes that will return the minute count of our clock. It should return a value from 00 to 59, just like a normal clock.
// hint: Write this in terms of totalSeconds, not the result of getSeconds? Can you determine why? Think about it and if you're having trouble, call over the instructor.
//
// hint: This will involve a few mathematical operations. How many minutes is 120 seconds? 2 minutes. What math do we intuitively use to determine that?
//
// hint: How many minutes are in 135 seconds? Still only 2 minutes. The remainder exists as the second count. You may have to use some Math (hint hint) for cases like this.
//
// Test your getMinutes method:
// If clock.totalSeconds = 0, clock.getMinutes() will evaluate to "00"
//
// If clock.totalSeconds = 40, clock.getMinutes() will evaluate to "00"
//
// If clock.totalSeconds = 60, clock.getMinutes() will evaluate to "01"
//
// If clock.totalSeconds = 134, clock.getMinutes() will evaluate to "02"
//
// If clock.totalSeconds = 4342, clock.getMinutes() will evaluate to "12"
//
// Write a method getHours that will return hour count of our clock. It can return any value from 00 to being arbitrarily high (i.e 72)
//
// Test getHours:
//
// If clock.totalSeconds = 0, clock.getHours() will evaluate to "00"
//
// If clock.totalSeconds = 200, clock.getHours() will evaluate to "00"
//
// If clock.totalSeconds = 4342, clock.getHours() will evaluate to "01"
//
// If clock.totalSeconds = 20000, clock.getHours() will evaluate to "05"
//
// If clock.totalSeconds = 900000, clock.getHours() will evaluate to "250"
//
// Write a method printTime that logs the time in clock format.
// Use getHours, getMinutes, and getSeconds
//
// You will need to do some concatenation
//
// If clock.totalSeconds = 0, clock.printTime() will log "00:00:00"
//
// If clock.totalSeconds = 200, clock.printTime() will log "00:03:20"
//
// If clock.totalSeconds = 3871, clock.printTime() will log "01:04:31"
//
// Write a method tick(startSecond). What this method should do is outlined below:
// If startSecond was passed in (we'll make it optional), set totalSeconds to be equal to it.
//
// Increment totalSeconds.
//
// Print the current time to the console.
//
// Using either setTimeout or setInterval, make this behavior repeat itself every second. Remember, arguments in Javascript are optional, so no need to worry about constantly setting the startSecond parameter.
//
// Test it out. When you're done, you'll have a clock that prints out a new time every second!
//
// Bonus: Try writing tick using both setTimeout and setInterval! I called my methods intervalTick and timeoutTick.


var clock = {
    totalSeconds: 0,

    getSeconds: function() {
        var secondCount = this.totalSeconds % 60;
        return this.standartify(secondCount);
    },

    getMinutes: function(){
        var minuteCount = Math.floor(this.totalSeconds / 60) % 60;
        return this.standartify(minuteCount);
    },

    standartify: function (number) {
        if (number < 10) {
            return "0" + number
        }
        return number.toString();
    },

    getHours: function () {
        var hourCount = Math.floor(this.totalSeconds / 3600) % 12;
        return this.standartify(hourCount);
    },

    printTime: function () {
        console.log(this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds());
    },

    tickTimeout: function (startSecond) {
        this.totalSeconds = startSecond || this.totalSeconds
        this.totalSeconds += 1;
        console.log(this.printTime());
        setTimeout(this.tickTimeout.bind(clock), 1000);
    },

    tickInterval: function(startSecond){
        this.totalSeconds = startSecond || this.totalSeconds

        setInterval(function () {
            this.totalSeconds += 1;
            this.printTime();
        }.bind(clock), 1000)
    }

};
