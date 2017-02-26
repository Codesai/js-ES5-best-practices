// Avoiding Implied Typecasting

var zero = 0;
if (zero === false) {
    // not executing because zero is 0, not false
}

// antipattern
if (zero == false) {
    // this block is executed...
}
