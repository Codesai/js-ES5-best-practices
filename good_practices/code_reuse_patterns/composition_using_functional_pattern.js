function cat(name) {
  function meow() {
    return "meoooow!";
  }

  function flee() {
    return "running";
  }

  return {
    sound: meow,
    name: function () {
      return name;
    },
    flee: flee
  };
}

function flying(animal) {
  return {
    sound: sound,
    name: function () {
      return animal.name();
    },
    flee: function() { // <- overriding method
      return "flying";
    }
  };

  function sound() { // <- decorating animal method
    return animal.sound() + "... from high above";
  }
}

function dog(name) {
  function bark() {
    return "Woof!";
  }

  function flee() {
    return "running";
  }

  return {
    sound: bark,
    name: function () {
      return name;
    },
    flee: flee
  };
}
