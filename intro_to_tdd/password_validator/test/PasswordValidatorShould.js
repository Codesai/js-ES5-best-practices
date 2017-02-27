'use strict';

describe('PasswordValidator Should', function() {

    var passwordValidator;

    beforeEach(function() {
        passwordValidator = PasswordValidator();
    });

    it('fix me', function() {
        expect(passwordValidator.validate("")).toBe(false);
    });

});