//first class funtion:-  in js ek feature 
// funtion can be have folowing operations
// 1 stored as value
// 2 pass as an argument to another funtion
// 3 return by another funtion
// 4 stored  in array, stack, queue 










//  1

//declaring a function add
function add(a,b){
    return a+b;
}


let sum = add; // store function add as value in variable sum (feature of js first class funtion)
let result = add(5,25)
console.log(result);

//now hum ab esa bhi kr skte hai ki 

let newresult = sum(25,3) // ab bhi result aaega bcoz hmne addfuntion ko as a value store kr diya tha ; variable sum me ,,;;,, isi ko first class function feature kehte hai.
console.log(newresult);






// 2

function summ(num1, num2) {  
    return num1 + num2;  
}  // output 20 //bcoz num1 =15, num2 = 5
  
let assign= summ;  
  
function avg(num1, num2, fcf /*39 param hai*/ ){  
    return fcf(num1,num2) / 2;  // samjho fcf ek ecf hai thats why we use paranthesis and(n1 , n2)  taki jab bad me call kre toh funtion call hoga... understand it..
}  
let res = avg(15, 5, assign); // again store function avg as a value in variabel res (feature of firstclassfunction) 
console.log(res);  
  






// 4
function divide(x,y){
    return x/y;
}

function test(a,b){
    return divide(a,b)
}

let see = test;

resultt = see(12,2)
console.log(resultt);

//or

function abc(){
    return function def(){
        console.log("hello");
    }
}

const output= abc()

// here abc() is higher-order funtion = the higher-order funtion is a function that makes a first class function be returned from it as a value.

console.log(output);// output/retuning funtion is anonymous function  to invoke anonymous funtion we have two ways // 1 using a variable




output();// simply create a varible output & assigned it to annonymous funtion  // and invoked it with parenthesis ( output() )

// 2 most useful way

abc()();









