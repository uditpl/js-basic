let singleQuotes = 'single quotes ka string';
let doubleQuotes = "double quotes ka string";
console.log(singleQuotes);
console.log(doubleQuotes);


let char = singleQuotes.charAt(4);
let ascii = singleQuotes.charCodeAt(4);
let subStr = singleQuotes.substring(2, 5);
console.log(char);
console.log(ascii);
console.log(subStr);
console.log("----------------------------------------------------");

let arrStr = singleQuotes.split("i");
console.log(arrStr);
console.log("----------------------------------------------------");

let arrstr = singleQuotes.split(" ");
console.log(arrstr);
console.log("----------------------------------------------------");

let Arrstr = singleQuotes.split("");
console.log(Arrstr);
console.log("----------------------------------------------------");

let str = arrStr.join("$");
console.log(str);
console.log("----------------------------------------------------");

let udit = '           udit is learning         '
udit = udit.trim();            //remove space from beganing and end
let ARRSTR = udit.split(" ");
console.log(ARRSTR);
let Str = ARRSTR.join("+");
console.log(Str);
console.log("----------------------------------------------------");