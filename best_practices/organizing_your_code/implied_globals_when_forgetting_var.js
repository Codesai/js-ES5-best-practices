// Implied globals when forgetting var

// In non strict mode, not using var creates an implied global.
function f() {
  undeclaredVariable = 17;
}

f();

this.undeclaredVariable
// => 17

// In strict mode, not using var throws a ReferenceError
function strictF() {
  'use strict';
  undeclaredVariableInStrictMode = 17;
}

strictF();
// => Uncaught ReferenceError: undeclaredVariableInStrictMode is not defined
// => at strictF (<anonymous>:1:47)
// => at <anonymous>:1:1

// Example modified from an example in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
