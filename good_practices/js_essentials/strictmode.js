// Strict Mode

// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";


// strict mode throws error in this scenarios

// 1. Impossible to accidentally create global variables
mistypedVariable = 17; //throws error


// 2. Assignment to non-writable obj
'use strict';

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError


// 3. Delete undeletable objects
'use strict';
delete Object.prototype; // throws a TypeError


// 4. Duplicate property names are a syntax error in strict mode

'use strict';
var o = { p: 1, p: 2 }; // !!! syntax error


// 5. Function parameter names must be unique

function sum(a, a, c) { // !!! syntax error
   'use strict';
   return a + b + c; // wrong if this code ran
}


// 6. Forbids octal syntax

'use strict';
var sum = 015 + // !!! syntax error
      197 +
      142;

var a = 0o10; // ES2015: Octal


// 7. Forbids setting properties on primitive values

(function() {
  'use strict';

  false.true = ''; // TypeError
  (14).sailing = 'home'; // TypeError
  'with'.you = 'far away'; // TypeError

})();



// Simplifying variable uses

// 1. Strict prohibits `with`

'use strict';
var x = 17;
with (obj) { // !!! syntax error
  // If this weren't strict mode, would this be var x, or
  // would it instead be obj.x?  It's impossible in general
  // to say without running the code, so the name can't be
  // optimized.
  x;
}


// 2. eval of strict mode code does not introduce new variables into the
// surrounding scope. In normal code eval("var x;") introduces a variable x
// into the surrounding function or the global scope.

var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);

// 3. Forbids deleting plain names. delete name in strict mode is a syntax error:

'use strict';
var x;
delete x; // !!! syntax error
eval('var y; delete y;'); // !!! syntax error


// Making eval and arguments simpler

// 1. the names eval and arguments can't be bound or assigned in language syntax.

'use strict';
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function('arguments', "'use strict'; return 17;");


// 2. strict mode code doesn't alias properties of arguments objects created
// within it

function f(a) {
  'use strict';
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);


// 3, arguments.callee is no longer supported. In normal code arguments.callee refers to the enclosing function.

'use strict';
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function('arguments', "'use strict'; return 17;");


// Paving the way for future ECMAScript versions

// 2, strict mode prohibits function statements not at the top level of a script or function.

'use strict';
if (true) {
  function f() { } // !!! syntax error
  f();
}

for (var i = 0; i < 5; i++) {
  function f2() { } // !!! syntax error
  f2();
}

function baz() { // kosher
  function eit() { } // also kosher
}
