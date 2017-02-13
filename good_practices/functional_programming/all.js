var _ = require('lodash');
var R = require('ramda');

function even(number) {
    return number % 2 === 0;
}

function odd(number) {
    return !even(number);
}

function allEven(numbers) {
    var i, number;

    for (i = 0; i < numbers.length; i++) {
        number = numbers[i];

        if (odd(number)) {
            return false;
        }
    }
    return true;
}

function allOdd(numbers) {
    var i, number;

    for (i = 0; i < numbers.length; i++) {
        number = numbers[i];

        if (even(number)) {
            return false;
        }
    }
    return true;
}

allEven([1, 2, 3, 4]);
allOdd([1, 2, 3, 4]);

// Using lodash
_.every([2, 4], even);
_.every([1, 3], odd);

// Using ramda
R.all(even)([2, 4]);
R.all(odd)([1, 3]);