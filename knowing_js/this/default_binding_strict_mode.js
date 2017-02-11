// Default binding in strict mode

function foo() {
  "use strict";

  console.log( this.a );
}

var a = 2;

foo();

/// Example from YDNJS: this & Object Prototypes chapter 2
/// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md