// Same example after using namespace pattern.
// It creates 1 global variable.

// global object
var MyApp = MyApp || {};

// constructors
MyApp.Parent = function() {}

MyApp.Child = function () {}

// a variable
MyApp.someVar = 1;

// an object container
MyApp.modules = {};

// nested objects
MyApp.modules.module1 = {};
MyApp.modules.module1.data = {
  a: 1,
  b: 2
};
MyApp.modules.module2 = {};

// Example from JavaScript Patterns chapter 5
