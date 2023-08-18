var ui = "ajit";

ui = "kanha";//variable is changable by asssigning a new value to itconsole.log(ui);

const uid = "123abc";
//uid = "abd35"; //assigning a new value to const in not allowed.

// in coding declaring const is good practice instead of declaring variables, not be shocked it is outcome statement of learnings and practices.

//SIGN UP FORM / store and print form ; like information (just like c syntax hai iska)
var fullName="ajit";
var email="ajit@123";
var password= "14523";
var confirmPassword = "14523";
var courseCount = 0;
var isloggedInFromGoogle = false;

//fullName = prompt("enter your name");

console.log(uid);
console.log("fullname is :",fullName);
console.log("youremail is :", email);
console.log("password is :", password);
console.log("confirm password is :",confirmPassword);
console.log("is logged in or not from google",isloggedInFromGoogle);

//other way to print everything is

console.log(`

fullname is : ${fullName}
your email is : ${email}
your password is : ${ password}
your confirm password is : ${confirmPassword}
is logged in from google ; ${isloggedInFromGoogle}

`
)// in javascript world it  is called interpolatiion this is better way to display stuff. But we are free to use any one of them..its totally our choice.


// sideup bar
//alert  //the pop up box that comes up from webpage (when we want to fill form from user) is come by alert

// prompt  //if we want to take input from user then we use something similar to alert which is prompt.

// prompt("enter your Name") ; //now ab is prompt ko hum kisi ek variable me store kar sakte Hai 

// var nameinfo = prompt("enter your Name");
// using alert and prompt is not good way to take input from user