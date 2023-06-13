// non primitive => array,objects,function
//function defination
function sayHi() {
   console.log("hello form sayHi" );
}
//function call
sayHi();

//function with variable
function sayHii(udit) {
    console.log("udit recive", udit);
    return "return from sayHii";
}
sayHii(32);
// sayHii("hello");
// sayHii([1,2,3,4]);
let rVal = sayHii([1,2,3,4]);
console.log("rVal",rVal);


function sayHiii(parmar) {
    let RvAL = parmar > 0.5 ? true : "less then 0.5";
    return RvAL;
}

let RvAL = sayHiii(0.7);
console.log("RvAL", RvAL);
