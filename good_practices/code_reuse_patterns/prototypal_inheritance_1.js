// Prototypal inheritance example:
// Inheriting from an object

"use strict";

function Person(name) {
  // an "own" property
  this.name = name;
}

// a property added to the prototype
Person.prototype.getName = function() {
  return this.name;
}

var papa = new Person("Adam");

// inheriting from papa object
var kid = Object.create(papa);

// kid gets access to both papa's own properties
// and the properties in papa's prototype
kid.getName();
