var num1 = 16;
var num2 = 3;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

var answer = num1 > num2;

console.log(answer); //output true bcoz in this case num1 and num2 is 16 and 3 respectively.

var num1 = 15;
var num2 = 20;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

var answer = num1 > num2;

console.log(answer); //output false bcoz in this case num1 and num2 is 15 and 20 respectively.

//used scenario
var sp = 199;
var lp = 799;

var discountp ;
discountp = ((lp - sp)/lp)*100;
console.log("discount price is :",discountp);


//"Math.________()" libraray ka use ham kr skte hai Math ka M hamesh uppercase me hi aaega.

dp = Math.round(discountp);//Math.round() ek libraray hai used to ignore (.)point onward value.
console.log(dp,"%off"); //phle value then string bhi print karva sakte hai.


var x = 5;
var y = 3
power= Math.pow(x,y);//Math.pow(x,y) libraray hai used to calculate x ki power y vala program.
console.log(power);

//simple way to caluculatel x ki power y is (x**y)
console.log(2*2)//4
console.log(2*3)//6
console.log(2**3)//8
console.log(2**4)//16
console.log(3*2)//6
console.log(3*3)//9
console.log(3**3)//27




