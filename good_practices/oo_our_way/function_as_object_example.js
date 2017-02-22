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
    if (notAlreadyTeaching(aClass)) {
      classes.push(aClass);
    }
  }

  function notAlreadyTeaching(aClass) {
    return !classes.includes(aClass);;
  }
}
