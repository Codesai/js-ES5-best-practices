// Simple module pattern

var MyApp = MyApp || {};

MyApp.someModule = (function () {
  var privateField = 'A private field';

  var privateMethod = function () {
    return 'Using a private method';
  };

  return {
    getPrivateField: function () {
      return privateField;
    },
    publicMethod: function () {
      return 'A public method!';
    },
    publicMethodUsingPrivateMethod: function () {
      return privateMethod() + " " + "from a public method";
    }
  };
})();
