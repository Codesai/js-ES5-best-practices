// the object
var man = {
    hands: 2,
    legs: 2,
    heads: 1
};

// somewhere else in the code
// a method was added to all objects
if (typeof  Object.prototype.clone === "undefined") {
    Object.prototype.clone = function () {};
}

// for-in loop

for (var i in man) {
    if (man.hasOwnProperty(i)) { // filter
        console.log(i, ":", man[i]);
    }
}
/*
result in the console
hands : 2
legs : 2
heads : 1
*/


// 2.
// antipattern:
// for-in loop without checking hasOwnProperty()
for (var i in man) {
    console.log(i, ":", man[i]);
}
/*
result in the console
hands : 2
legs : 2
heads : 1
clone: function()
*/


// 3.
// for-in and for-of

Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
