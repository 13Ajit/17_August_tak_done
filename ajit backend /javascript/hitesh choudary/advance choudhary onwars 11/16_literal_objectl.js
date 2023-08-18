//Objects ko declare karne ke 2 tarike hai 29 same hai keval singleton ka farak padta hai. singleton = single object of that type
// 1) constructor ki tarah  &    2) literals ki tarah

//jab bhi object constructor ki tarah banta hai;;; toh vo object singleton banta hai / singleton object rehta hai. (file no 17constructor objects)

//jab literals ki tarah declare krte / banate hai to object singleton nhi rhta uske multiple references ban jate hai......

// 1) constructor ki tarah 
//Object.create // bad me padenge


// 2) object literals syntax// literals kch nhi simple tarike se declare krna usse hi literal kehte hai or haa isme singleton nhi rehta hai object ka.
/* 'const userId = (
    key: value ,or 
    name: value
)' */ //key/name hmesha string type hi hota hai by default ,,, issi liye jb bhi hum access krte hai key ko toh hame double quote lagana pdta hai eg userId["name"]

//objects me keys and values ka chhakkkarr hota hai. 

//mtlb hum object ke property(data) ko 'key' ke sahare bhi access kr skte hai ;;;; jbki arrray me keval ek tarika hota hai array ki property (data) ko access krne ka jo ki hota hai  arr[0]/arr[1] indexing dwara ok ; but object me hum key bhi define kr skte hai and value bhi sath hi  key ki help se koi si bhi property (data of ) object access bhi kr sakte hai and change bhi kr skte hai.

const userData = {
    name : "ajit",// yaha (name:________) hum jo chahe vo value de skte hai eg strig, number ,boolean, function, object , array kuch bhi etc
    age : 18,//number value hai
    location: "mp",//string hai
    isLoggedIn: false,//boolean value hai
    lastLogginDays :  ["monday","Saturday","sunday"]// array value hai
//function ko as a value dena nichee sikha hai .... ok... check out ..
}






//************* Access krne ka tarika of Object ***************

// 1) Object.propety // easy to use
// 2) objectp["property"]// good practice  to use it...


console.log(userData.name);
console.log(userData["location"],"\n");









//********** DECLARE SYMBOL DATA TYPE**************************

//declaring a symbol //symbol = ek primitive data type hai

const mysymb = Symbol("key 1 ")// symbol likha bcoz ye batane ke liye ki key1 ek symbol type ka data hai ; simililary dusre specific data type ko bhi hum jarurat padne pr declare krte hai eg 
// 'var contact = string("7974685035")'//error batega console krene pr bcoz string ka 'S' capital hona chahiye :- 'String'.
// this is syntax; symbol declare karne ka tarika (koi nhi batata hai ye.) ;for symbol 'key 1'

const Data = {
    name : "ajit",
    age : 18,
    location: "mp",
    isLoggedIn: false,
    lastLogginDays :  ["monday","Saturday","sunday"]
}

//********BELOW CONCEPT IS TOO DEEP AND NOT TOO IMP SO MAY BE SKIP IT ***************
//************ use/declare 'symbol' as a 'key' in an object and show me to print it ? Interview ka Question hai ye********************

//syntax hai :- []bracket me likhna hota hai symbol wale variable name ko

const mySymbol = Symbol("key 1 ");
const userDataa = {
    name : "ajit",
    mySymbol: "my key1", //declare kr diya, but ye ab bhi ek string type hi hai na ki symbol see output
    [mySymbol]: "my key 1",
    age : "18years",
    location: "mp",
    isLoggedIn: false,
    lastLogginDays :  ["monday","Saturday","sunday"]
}
console.log(userDataa.name,"\n");
console.log(userDataa["age"],"\n");
console.log(userDataa.location,"\n");
console.log(userDataa.mySymbol);
console.log(typeof userDataa.mySymbol);// output ek string type hi dikha raha hai , Q interview ask how it show ki ye ek symbol typa ka data hai ? 








console.log("\n");





//object ki propety value ko change krene ke liye just us (vo) key ko access krke eqaul krke jo krna chahe vo change kr skte hai

userDataa.name= "Rohan Thakur"
console.log(userDataa.name);










// hum object ko freze bhi kr skte hai mtlv koi bhi us object ki properties & values ko change nhi kr ske

//Object.freeze(userDataa)// syntax :- object.freeze(objectname) jo freeze krna hai

userDataa.age=20
console.log(userDataa.age);//output 18 hi aa rha hai becoz ab object userdataa freeze hai. uski values me change nhi ho sakta.
console.log(userDataa);










//add (declare) function as a property in js object 
// function ko j.s. me hum kese bhi use kr sakte hai koi issue nhi hai eg as a variable,as a property of object etc

userDataa.greeting = function(){
    console.log("hello javascript user");
}// syntax hai .greeting // learn more about greeting from W3school or mdm.

console.log(userDataa.greeting);//output aaega function[(anonymous)] ;; mtlb fnction ka reference aaya hai hamare pass

console.log(userDataa.greeting()) //error bataega ki userDataa.greeting is not a function. becoz ki humne object (userDataa) ko freeze kr diya thaa;  now ab defreeze krenge object ko. ultimately output aaega 'hello js user

userDataa.greetingTwo = function(){
    console.log(`hello js  user, ${this.name}`);//'this' show kr dega object(userDataa) ke andar jitni properties hai, unko reference kr dega .
}
// console.log(userDataa.greeting())
console.log(userDataa.greetingTwo())

