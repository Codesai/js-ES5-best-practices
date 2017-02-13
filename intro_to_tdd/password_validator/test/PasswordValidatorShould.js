'use strict';

const PasswordValidator = require('../src/PasswordValidator.js');
const should = require('chai').should();

describe('PasswordValidator Should', () => {

    let passwordValidator;

    beforeEach(() => {
        passwordValidator = PasswordValidator();
    });

    it('fix me', () => {
        passwordValidator.validate("").should.equal(false);
    });

});