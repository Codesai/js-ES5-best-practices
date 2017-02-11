// Losing this binding (callbacks)

function foo() {
    console.log( this.a );
}

function doFoo(fn) {
    fn();
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global";

doFoo( obj.foo );

/// Example from YDNJS: this & Object Prototypes chapter 2
/// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md