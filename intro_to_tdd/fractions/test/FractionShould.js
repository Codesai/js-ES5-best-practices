'use strict';

var Fraction = require('../src/Fraction.js');
var should = require('chai').should();

describe('Fraction Should', function() {

    var fraction;

    beforeEach(function() {
        fraction = Fraction();
    });

    it('add', function() {
        fraction.add(Fraction()).should.equal('fix me');
    });

});
