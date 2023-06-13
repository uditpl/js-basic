//array declare
let arr=[];
let array=[1, 2, 3, 4, 5];
console.log(array);
console.log(array.length);
let i = 0;
while (i < array.length) {
    console.log("elem at idx", i, "is", array[i]);
    i++
}

//push,unshift
array.push("last value");   //for add in last
array.unshift("first value");    //for add at first
console.log("----------------------------------------------------");
console.log(array);

//pop,shift
array.pop();         //delete last element
array.shift();         //delete first element
console.log("----------------------------------------------------");
console.log(array);


// start idx,ending idx
let partOfArray = array.slice(2, 4);
console.log(partOfArray);
console.log(array);
console.log(array);
console.log("----------------------------------------------------");

let partOfAnArray = array.slice(2);
console.log(partOfAnArray);
console.log(array);
console.log("----------------------------------------------------");


const  deletedItem = array.splice(2, 3);
console.log(deletedItem);
console.log(array);


