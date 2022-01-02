let _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },

    inRange(number, start = 0, end) {
        if (end == undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            temp = start;
            start = end;
            end = temp;
        }
        if (number >= start && number < end) {
            return true;
        } else {
            return false;
        }
    },
    words(string) {
        return string.split(' ');
    }
};





// Do not write or modify code below this line.
module.exports = _;