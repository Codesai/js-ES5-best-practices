'use strict';

var PasswordValidator = require('../src/PasswordValidator.js');
var should = require('chai').should();

describe('PasswordValidator Should', function() {

    var passwordValidator;

    beforeEach(function() {
        passwordValidator = PasswordValidator();
    });

    it('fix me', function() {
        passwordValidator.validate("").should.equal(false);
    });

});