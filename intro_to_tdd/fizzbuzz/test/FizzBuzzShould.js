'use strict';

const FizzBuzz = require('../src/FizzBuzz.js');
const should = require('chai').should();

describe('FizzBuzz Should', () => {

    let fizzBuzz;

    beforeEach(() => {
        fizzBuzz = FizzBuzz();
    });

    it('fix me', () => {
        fizzBuzz.generate().should.equal('fix me');
    });

});