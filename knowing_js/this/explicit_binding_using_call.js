// Explicit binding using call

function foo() {
  console.log( this.a );
}

var obj = {
  a: 2
};

foo.call( obj );

/// Example from YDNJS: this & Object Prototypes chapter 2
/// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md