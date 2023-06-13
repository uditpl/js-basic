//objects -> group of key : value pair 
let cap = {
    name: "udit",
    lastName: "parmar",
    address: {
        city: "bhavnagar",
        state: "gujrat"
    },
    age: 20,
    isEngineer:true,
    movies: ["shiddat", "3idot", "baby"],
    sayHiiii: function () {
        console.log("cap say's hiiii");
    }
};

//get
    //  console.log(cap.name);
    //  console.log(cap.age);
    //  console.log(cap.movies[2]);
    //  cap.sayHiiii();
    //  console.log("cap :",cap);


//set update
cap.age =30;
cap.isEngineer =false;
cap.friends = ["tk", "mendy", "gili", "dheblo"];
console.log("--------------------------------------------------------------");
      // console.log("cap :",cap);

// //delete
// delete cap.address
// console.log("--------------------------------------------------------------");
//       // console.log("cap :",cap);

// cap[name]

// for (let key in cap) {
//     console.log(key, " : ", cap[key]);
// }
// console.log("--------------------------------------------------------------");
// let propKey = "age";
// console.log(cap[propKey]);
// console.log("--------------------------------------------------------------");
// //undifine
// console.log(cap.xyz);

