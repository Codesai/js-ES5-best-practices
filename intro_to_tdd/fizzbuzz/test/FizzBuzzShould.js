'use strict';

var FizzBuzz = require('../src/FizzBuzz.js');
var should = require('chai').should();

describe('FizzBuzz Should', function() {

    var fizzBuzz;

    beforeEach(function() {
        fizzBuzz = FizzBuzz();
    });

    it('fix me', function() {
        fizzBuzz.generate().should.equal('fix me');
    });

});