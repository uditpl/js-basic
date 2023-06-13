// const arr = [1, 2, 3, 4, 5];
//arr.push(10);
//console.log(arr);


//how is it possible?
//arr.shift();
//console.log(arr);
//arr=4


//objects
//key : value
//string,number: valid type
let object = {
    name: "udit",
    lastName: "parmar",
    sayHi: function () {
        console.log("udit says hii");
    }
}
// console.log("line number 22", object[25]);
// console.log(object);


// //loop
// for (let key in object) {
//     console.log(key, " : ", object[key]);
// }
// object.sayHi();


// //Arrays
 let arr = [1, 2, 3, 4, 5];
 arr.myprop="Hello";
 arr.print=function(){
     console.log("hello from array");
 }
 for (let key in arr) {
     console.log(key, " : ", arr[key]);
 }
console.log(arr);
 arr[95] = 100;
 console.log(arr);


// //function
function fn() {
    console.log("hello from fn");
}
fn();
fn.prop = "property of function";
fn.myFn = function fn() {
    console.log("i am a method of a function");
}
fn();
fn.myFn();
console.log (fn.prop);


//js ----> primitive or object
//everything object --> dates,errors,modules
//6 tyeps primitive-->number ,string,boolean,undifined,null,symbol