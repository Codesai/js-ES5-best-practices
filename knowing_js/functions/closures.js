(function(x) {
    // env -> {x: 3, '..': {}}
    return function(y) {
        // env ->{y: 4, '..': {x: 3, '..': {}}}
        return x * y;
    };
})(3)(4);

var foo = (function(x) {
    // env -> {x: 3, '..': {}}
    return function(y) {
        // env ->{y: 4, '..': {x: 3, '..': {}}}
        return x * y;
    };
})(3);

foo(4);
