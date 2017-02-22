function professor(name) {
  var classes = [];

  return {
    classes: function () {
      return classes.slice(0);
    },
    name: function () {
      return name;
    },
    addClass: addClass
  };

  function addClass(aClass) {
    if (isAlreadyTeaching(aClass)) {
      classes.push(aClass);
    }
  }

  function isAlreadyTeaching(aClass) {
    return classes.includes(aClass);;
  }
}
