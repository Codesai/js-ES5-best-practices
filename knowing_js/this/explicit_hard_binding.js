// Explicitly hard-binding

function foo() {
  console.log( this.a );
}

var obj = {
  a: 2
};

var bar = function() {
  foo.call( obj );
};

bar(); 
setTimeout( bar, 100 ); 

bar.call( window );

/// Example from YDNJS: this & Object Prototypes chapter 2
/// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md