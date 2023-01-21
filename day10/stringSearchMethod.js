document.getElementById("demo").innerHTML = "Azhar";
let str = "Apple,Banana,Kiwi,Banana";
const bananaIndex = str.indexOf("Banana", 15);
console.log("Position", bananaIndex);
const newString = str.slice(bananaIndex);
console.log("New string after slice", newString);
const serachIndex = str.search("Banana");
console.log("Serach method Index", serachIndex);
let text2 = "The rain in SPAIN stays mainly in the plain";
const matchReturnValue = text2.match(/ain/gi);
console.log("returned value", matchReturnValue);
let text = "Hello world, welcome to the universe.";
const includesReturnValue = text.includes("world", 12);
console.log("includesReturnValue", includesReturnValue);

var a = "Azhar";
var result = a.slice(-2, 3);
console.log(result);
