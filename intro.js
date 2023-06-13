// print
console.log("hello JS:");

// variable diclaration
// js only tells you that it is a variable
let a;
a = 10;
a = 10.5;                          
console.log(a);  //number
a = "hello i am a string";
console.log(a);
a = 'i am a also string';
console.log("variable contains", a); //string

// variable type : primitive type:number, string,null,boolean
a = null
console.log("variable contains", a);  //null
a = true
console.log("variable contains", a);  //boolean

// js-> java,c++,c
//loop
// let number = 10;
// for(let i = 1; i <= 10; i++) {
//     console.log("number is", i);
// }

//number is prime or not
let number = 22;
flag = true;
for(let div = 2; div < number; div++) {
    if (number%div == 0) {
        flag = false;
        break;
    }


}
if (flag == true) {
    console.log(number, "is prime");
}
else {
    console.log(number, "is not prime");
}



