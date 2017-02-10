/// Typical confusion: assuming this refers to the function itself

function foo(num) {
  console.log( "foo: " + num );
  this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
  if (i > 5) {
      foo( i );
  }
}

console.log( foo.count );

// What is this refering to inside foo?
var count = 0;

for (i=0; i<10; i++) {
  if (i > 5) {
      foo( i );
  }
}

console.log( count );

/// Example from YDNJS: this & Object Prototypes chapter 1
/// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md
