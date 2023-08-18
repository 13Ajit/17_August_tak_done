console.log("hello world");

var name = "ajit";
var monbileNo = "7974685035";
var age = 22;
var sum= 2+50221.63;

console.log(name)
console.log(monbileNo)
console.log(age);
console.log(sum)

//to import follow this {this type of import is called js common module import}
const About_harry= require("./second")//dot lagate hai becoz import second file se kr rhe hain.

console.log("hello this is import data",About_harry)