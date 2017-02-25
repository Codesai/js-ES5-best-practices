// Prototypal inheritance example:
// Inheriting only from an object's prototype

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

// inheriting from papa's prototype
var kid = Object.create(Person.prototype);

// kid only gets access to papa's prototype
kid.getName();

typeof kid.getName

typeof kid.name

kid.name = "Pedro";

kid.getName();
