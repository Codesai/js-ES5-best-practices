/// Typical confusion: assuming this refers to the function's scope

function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  console.log( "bar was called" );  
  console.log( this.a );
  console.log( "*****************" ); 
}

foo();

/// Example from YDNJS: this & Object Prototypes chapter 1
/// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md