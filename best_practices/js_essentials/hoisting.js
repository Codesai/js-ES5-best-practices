//hoisting

myname = "global";
function func() {
    alert(myname);
    var myname = "local";
    alert(myname);
}
func();



// antipattern
myname = "global"; // global variable
function func() {
    alert(myname); // "undefined"
    var myname = "local";
    alert(myname); // "local"
}
func();

// alternative
myname = "global"; // global variable
function func() {
    var myname; // same as -> var myname = undefined;
    alert(myname); // "undefined"
    myname = "local";
    alert(myname); // "local"
}
func();
