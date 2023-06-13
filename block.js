if (true) {
    console.log("hello");
    console.log("hello again");
}
console.log("-------------------------");
//{}--> block

let fruit = "apple";
console.log(fruit);
//let fruit = "apple";
{
    let fruit = "orange";
    console.log(fruit);
}
console.log(fruit);
console.log("-------------------------");

let fruits = "apple";
console.log(fruits);
{
   // console.log(fruits);--->TDZ
    let fruits ;
    console.log(fruits);
    fruits = "orange";
    {
         console.log(fruits);
    }
    console.log(fruits);
}
console.log(fruits);
console.log("-------------------------");




const Fruits = "apple";
console.log(Fruits);
{
   // console.log(fruits);--->TDZ
    const Fruits = "orange";
         console.log(Fruits);
    
}
console.log(Fruits);
console.log("-------------------------");

var FRUITS = "apple";
console.log(FRUITS);
{
   // console.log(FRUITS);--->TDZ
    let FRUITS = "orange";
         console.log(FRUITS);
    
}
console.log(FRUITS);
console.log("-------------------------");


// let FRUITs = "apple";
// console.log(FRUITs);
// {
//    // console.log(FRUITs);--->TDZ
//     var FRUITs = "orange";
//          console.log(FRUITs);
// }
// console.log(FRUITs);
// console.log("-------------------------");
