const marvelHeros =["thor","Ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]


// ek array ke ander, ham dusra array, as a arrray jod sakte hai 
// by using - Array.push(arrayName)




marvelHeros.push(dcHeros) // is se array merge nhi huva hai // balki is se array ke ander push wala array aa gya hai.

console.log(marvelHeros); //output me isnne / marvelheros array ne , dcheros array ko bhi as a element le liya hai ([ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]) becoz 

// 1 array ke ander hum koi se bhi data type ke elements le sakte hai okk() .'.toh  isne dcheros ko as a array le liya thik hai..

// 2 bcoz hamne push use kiya hai isliy dchero array as a new element add ho gaya hai marvelheros array me.

console.log(marvelHeros[3]); // ye ouput krega dcheros array ko, becoz 3 indexing pr ab hamare pas dcheros hai as a element.

// ab agar hame dcHeros me se value nikalni hai toh hame likhna padega futher more syntax  see

console.log(marvelHeros[3][2]); // now ab ye access krega dcherso ke 2nd element ko.























// ek array ke ander hum do array jod sakte hai by using // .concat() method
// IMP METHOD HAI....
// iske allawa bhi ek esay tarika hai jo hum aksar use krte hai .spread operator vala  very imp hai


const newheros = ["A","B","C"]
const oldheros = ["x","y","z"]

newheros.concat(oldheros) // sirf is se array merge nhi honge, balki hame ek new array lena padega jisme hum merge krke 29 array ko as a new array dikha sake / use kr sake.
console.log(newheros); // output krega only newheros array ko

const allHeros = newheros.concat(oldheros)
console.log(allHeros); // 29 arrays ko merge krke dikha dega as new array VERY IMP METHOD HAI


// EASY  &  PROFESSIONL  isko hi use karna hai. // to copy arrays


const allnewHeros = [...newheros,...oldheros] // syntax rat le isi ka use hota hai mostly

console.log(allnewHeros)

const newHeros = [...newheros,...oldheros,...dcHeros] // spread operator me kitne hi array jod sakte hai.
console.log(newHeros)










// more Array methods
// .isArray(____)
// .from(_______)
// .of(_______)


//imp hia used in various places but mostly used when we do "Data scraping"

// jb kai bar hum data select krte hai web page se, toh vo alag formate me aata hai eg nodelist,string,objects but agar chaahiye array (bcoz array ke uper hi toh loop kr skte hai.) 

console.log(Array.isArray("ajit")); // is ke dwara humne array se pucha ki ky ajit name ka array hai ky //syntax :- Array.isArray("__________")

// lekin agar convert krna hota to hum krte by // using Array.from("________")

console.log(Array.from("ajit")); // ouput aaega ajit in array format




//***************...............IMP CONCEPT HAI.....................*****************************


// ab agar hame different values (Kisi bhi data type ki ho sakti hai. ya mix bhi ho sakti hai) ko array format me laana hai to we use // Array.of(_______) method very imp hai ek new array bn kr aa jaega , us aarray ko hum use kr sakte hai....

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // Array aa jaega let values ka, very imp concept hai.

let scoreA = [2,2,3258,3,58]
let scoreB = [85,2,6,3,5,31,3,]
let scoreC = [7,8,5,6,3,2,3,2]
console.log(Array.of(scoreA,scoreB,scoreC));

let abc = "ajit"
let bbc = 152
let cbc = [7,8,5,6,3,2,3,2]
console.log(Array.of(abc,bbc,cbc)); // mix hokar array aa jaega




