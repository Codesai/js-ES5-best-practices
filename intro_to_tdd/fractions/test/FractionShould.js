'use strict';

describe('Fraction Should', function() {

    var fraction;

    beforeEach(function() {
        fraction = Fraction();
    });

    it('add', function() {
        expect(fraction.add(Fraction())).toBe('fix me');
    });

});
