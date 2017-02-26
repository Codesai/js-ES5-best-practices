// Nonos in ES5

// Don’t use with

'use strict';
var x = 17;
with (obj) { // !!! syntax error
  // If this weren't strict mode, would this be var x, or would it instead be obj.x?
  // It's impossible in general to say without running the code, so the name can't be optimized.
  x;
}


// (Not) Augmenting Built-in Prototypes

// secure pattern to custom addition
if (typeof Object.prototype.myMethod !== "function") {
  Object.protoype.myMethod = function () {
    // implementation...
  };
}


// Avoiding Implied Typecasting

var zero = 0;
if (zero === false) {
    // not executing because zero is 0, not false
}

// antipattern
if (zero == false) {
    // this block is executed...
}


// Avoiding eval(): “eval() is evil.”

console.log(typeof un);    // "undefined"
console.log(typeof deux);  // "undefined"
console.log(typeof trois); // "undefined"

var jsstring = "var un = 1; console.log(un);";
eval(jsstring); // logs "1"

jsstring = "var deux = 2; console.log(deux);";
new Function(jsstring)(); // logs "2"

jsstring = "var trois = 3; console.log(trois);";
(function () {
    eval(jsstring);
}()); // logs "3"

console.log(typeof un);    // "number"
console.log(typeof deux);  // "undefined"
console.log(typeof trois); // "undefined"
