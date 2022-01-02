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
    },
    pad(str, len) {
        if (len <= str.length) {
            return str;
        } else {
            let startPaddingLength = Math.floor((len - str.length) / 2);
            let endPaddingLength = len - str.length - startPaddingLength; 
            let paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
            return paddedString;
        }
    },
    has(obj, key) {
        if (obj[key] == undefined) {
            return false;
        } else {
            return true;
        }
    },
    invert(obj) {
        let invertedObj = {}
        for (key in obj) {
            let originalValue = obj[key];
            invertedObj[originalValue] = key;
            
        }
        return invertedObj;
    },
    findKey(object, predicate) {
        for (key in object) {
            let value = object[key];
            let predicateReturnedValue = predicate(value);
            if (predicateReturnedValue == true) {
                return key;
            }
        }
    },
    drop(arr, num = 1) {
        let newArr = [];
        for (let i = num; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    },
    dropWhile(arr, predicate) {
        let dropNumber = arr.findIndex((element, index) => {
            return !predicate(element, index, arr)});
        let newArr = this.drop(arr, dropNumber);
        return newArr;
        // let newArr = [];
        // let counter = 0;
        // for (let i = 0; i <= arr.length; i++) {
        //     if (predicate(arr[i], i, arr) == undefined) {
        //         counter = i;
        //     }
        // }
        // for (let i = counter; i < arr.length; i++) {
        //     newArr.push(arr[i]);
        // }
        // return newArr;
    },
};





// Do not write or modify code below this line.
module.exports = _;