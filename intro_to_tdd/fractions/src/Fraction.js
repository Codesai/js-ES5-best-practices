'use strict';

function Fraction() {
    function greatestCommonDivisor(a, b) {
        if ( ! b) {
          return a;
        }
        return greatestCommonDivisor(b, a % b);
    }
    return {
        add: function(fraction) { }
    };
}
