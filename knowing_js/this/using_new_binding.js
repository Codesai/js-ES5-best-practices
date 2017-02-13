// Using new

function foo(a) {
  this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a );

/// Example from YDNJS: this & Object Prototypes chapter 2
/// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md