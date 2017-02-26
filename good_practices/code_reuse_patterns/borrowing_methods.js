// Borrowing methods example

function greetings() {
  function greeting(theGreeting, name) {
    return theGreeting + " I'm " + name;
  }
  return {
    hello: function () {
      return greeting("Hello!", this.name());
    },
    bonjour: function () {
      return greeting("Bonjour!", this.name());
    },
    hola: function () {
      return greeting("Hola!", this.name());
    }
  };
}

function person(name) {
  return {
    name: function () {
      return name;
    }
  };
}

function Person(name) {
  this.name = function () {
    return name;
  };
}

greetings().hello.apply(person("koko"));

greetings().hello.apply(new Person("koko"));

// the same would work using call instead of apply
