//js array me ( c/c++ ke array se hat ke hum ) ek hi array me diffeerent type ke data type elements ko store kr sakte hai . eg number string  boolean, object, array ( mtlb hum array ke andar array bhi store kr sakte hai) etc.
//eg :- let arr = [1,2,true,"ajit",522,"856856536"] // ye ek valid array hai js me

const myArr =[2,25,32,35,31,89] // array of numbers data type

const myHeros = ["shaktiman","superman","badman","Hanuman","kingman"] // array of strings data type

const myArr2 = new Array(1,2,5,36,2,5) // ye bhi ek syntax / tarika hai to declare array.. (note:- yaha Array likhen ke bad just paranthesis me elements hi likhte hai , na ki bracket ki need hoti hai)


console.log(myArr[1]);
















// Array Methods
myArr.push(6) //to add element in array, in last;
console.log(myArr);

myArr.pop() // to remove last element in array;
console.log(myArr);

myArr.unshift(9) // to add an element in starting
console.log(myArr);

myArr.shift() // to remove an element from starting
console.log(myArr);


// questioning array method  // array se question karna
console.log(myArr.includes(9)); // show krega ki array me 9 include hai ya nhi ,;  answer :-  boolean form me aaega


console.log(myArr.indexOf(35));// bataega ki 35 ka index no ky hai

console.log(myArr.indexOf(3)); /// jo value nhi hai uska index -minus me batega .. mtlb ki vo value hai hi nhi

//.join method (very very imp) =  change array to string
const newArr =myArr.join() //very very useful concept hai aage ke liye
console.log(myArr); // array format hi rhega / aaega
console.log(newArr); // same data aaega lekin simple form me na ki array ke form me

console.log(typeof myArr); // object hi rhega.  //note Array bhi ek object form hi hai
console.log(typeof newArr);// bcoz hmne join method use kri thi toh format string ho gaya array ka 









// slice and splice concept in array 
//Q banate hai  Q. 1 :-  dono me differece ky hai // ek original me change karta hai(splice() , dusra nhi karta hai (slice)

//Q. 2 :- dono me se kon original array me change krta hai. // Ans :- splice origninal me change krta hai / original me se value hata deta hai

console.log("A",myArr);
const myn1 = myArr.slice(1,3) // .slice(1,3) mtlb myArr ka indexing no 1 se 2 ko hi rhkna hai / lena hai / print karana hai.
console.log(myn1) //print 1 se 2 indexing wali value ok

console.log("B",myArr);
const myn2 = myArr.splice(1,3) // .splice(1,3) mtlb myArr ka indexing no 1 se 3 ko hi rhkna hai / lena hai / print karana hai.
// ek or difference hota hai .splice(1,3) ka ki yah original array jis pr .splice use ho rha hai ko ki change kr deta hai mtlb name se hi splice (kat) deta hai
console.log(myn2) // print 3 value 1 se 3 indexing wali ok

console.log("C",myArr); //ab isme only remaining value hi reh gayi hai bcoz  splice ne isme se 1 se 3 tk ki indexing values ko splice kr liya hai.. that's the difference.