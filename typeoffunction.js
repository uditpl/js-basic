// type of function
//function statement
function sayHello() {
    console.log("hello");
}
// fn invocation
sayHello();
console.log("---------------------------------------");


//funcion statement 
function hello(param) {
    console.log("hello", param);
}
// fn invocation
hello(10);
console.log("---------------------------------------");
hello("hello");
console.log("---------------------------------------");
hello([1, 2, 3, 4, 5]);
console.log("---------------------------------------");
hello({ name: "udit" });
console.log("---------------------------------------");
hello();  //--->undifined
console.log("---------------------------------------");

let rVal =hello();
console.log("rVal",rVal);

//function are first class citizens
//function treated as variables


//assignment
//let a = 10;
let a = [1, 2, 3, 4];
let b = a;
console.log(b);
console.log("---------------------------------------");


//function expression
let fnContainer = function () {
    console.log("i am a expression");
    console.log("i am a anonymous function");//--->unname function

}
fnContainer();

console.log("---------------------------------------");

//IIFE--> Immediately Invoked Function expression
(function fn (){
    console.log("i am IIFE");
    console.log("I will be run by my own");
})();
console.log("---------------------------------------");

//Arrow Function
  //normal--->
// let fnn = (num) => {
//     return num*num
// }

  //arrow--->
  let fnn = num =>  num*num;
  console.log(fnn(5));
  console.log("---------------------------------------");

  //first clss citizens
  function Hello(param) {
    console.log("hello", param);
    param();
    return "udit parmar";
}
//address
function smaller() {
    console.log("hello i am a smaller ");
}

// Hello([1, 2, 3, 4]);
// Hello(smaller)
let Rval = Hello(smaller);
console.log(Rval);
console.log("---------------------------------------");

function outer() {
    console.log("i am outer returning inner");
    return function () {
        console.log("i am inner");
    }
}

let rval = outer();
console.log("rval", rval);
rval();