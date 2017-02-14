var x = "x at global object";

var getX = function () {
  return this.x;
}

var someObject = {
  x: "x at someObject",
  getX: getX
};

var extractX = function () {
  return this.getX();
};

var retrieveX = someObject.getX;

var obtainX = function () {
  return someObject.getX();
};

console.log(someObject.getX());

console.log(getX());

console.log(obtainX());

console.log(
  extractX()
);

console.log(
  retrieveX.call({
    x: 35
  })
);

console.log(
  retrieveX.apply(someObject)
);

console.log(
retrieveX.apply(this)
});


var foo = function (fn) {
  return fn();
};

console.log(
  foo(getX)
);

console.log(
  foo(someObject.getX)
);

console.log(
  foo(function () {
    return getX.apply(someObject)
  })
);

console.log(
  foo(function () {
    return getX.call(someObject)
  })
);

console.log(
  foo(getX.bind(someObject))
);
