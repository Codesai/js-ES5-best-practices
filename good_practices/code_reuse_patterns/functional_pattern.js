// Functional inheritance example

function cat(name) {
  function meow() {
    return "meoooow!";
  }

  function fleet() {
    return "running";
  }

  return {
    meow: meow,
    name: function () {
      return name;
    },
    fleet: fleet
  };
}

function flyingCat(name) {
  var theCat = cat(name),
    originalMeow = theCat.meow,
    superMeow = function () {
      return originalMeow.apply(theCat, arguments);
    };
  // The same but using bind
  //superMeow = theCat.meow.bind(theCat); // <- parent method

  theCat.meow = function() { // <- extending method
    return superMeow() + "... from high above";
  }

  theCat.fleet = function() { // <- overriding method
    return "flying";
  }

  theCat.levitate = function() { // <- adding new method
    return name + " levitates while having a nap";
  }

  return theCat;
}
