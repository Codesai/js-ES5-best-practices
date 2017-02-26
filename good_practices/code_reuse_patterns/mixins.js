function mix() {
  var arg, prop, val, child = {};
  for (arg = 0; arg < arguments.length; arg += 1) {
    for (prop in arguments[arg]) {
      if (arguments[arg].hasOwnProperty(prop)) {
        val = arguments[arg][prop]
        if (typeof val == 'function') {
          child[prop] = val.bind(child);
        } else {
          child[prop] = val;
        }
      }
    }
  }
  return child;
}

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

var personThatGreetsFP = mix(person("koko"), greetings());

function Person(name) {
  this.name = function () {
    return name;
  };
}

var personThatGreetsC = mix(new Person("koko"), greetings());
