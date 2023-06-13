console.log("line 1", varName);
var varName = 10;
//fn b defination
function b() {
    console.log("line 5", varName);
}
console.log("line 7", varName);
function fn() {
    console.log("line 9", varName);
    
    var varName = 20;
  //from fn
    b();
    console.log("line 13", varName);
}
fn();