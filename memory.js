//window
//console.log(global);
//console.log(this);

//function inside !---> global area

console.log("a is",a);
var a;
console.log("a is",a);
a = 10;
console.log("a is",a);


//function statment
fn();
function fn() {
    console.log("i can be called before my declaration");
}
fn();



function real() {
    console.log("i am the real");
}
function real() {
    console.log("no i am the real");
}
function real() {
    console.log("no no no i am the real one");
}
real();