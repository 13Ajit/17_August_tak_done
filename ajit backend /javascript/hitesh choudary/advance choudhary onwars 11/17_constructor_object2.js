// declare object as constructor // constructor me hi object singleton hota hai

//below tarike se bhi hum object ko declare kr sakte hai by constructor.

//first tarika
//'const tinderuUser = new Object()' // singleton object hai.

//second tarika
/*'const tinderUser = {}
tinderUser.age = 12
tinderUser.pata = "indore"
tinderUser.id = "alksj"'
*/

// singleton object nhi hai.

// 29 tarike same hai. koi difference nhi hai; except one ki first wala singleton object hai

const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "sammay"
tinderUser.isloggedIn = false

console.log(tinderUser);




















//ab hum Object ke andar object ko dete hai

const regularUser = {
    email:"sum@gmail.com",
    fullName:{
         userfullname: "Ajay singh Rathore",
         userpermanentaddress : {
            add1: "revenue NavigationProvider",
            add2: "bhavani nagar"
         }
}
    } // now ab ye fullname khud ek object ki tarah declare ho gaya hai, regularUser object ke andar as a property

//values access krne ka tarika Hai .dot lagakr likhna

console.log(regularUser)// ye output krega puree main object ko 
//ab jab hame object ke bhitar ke objects ko access karna ho to hum dot. lagate jaenge and access krte jaenge
console.log(regularUser.fullName);
console.log(regularUser.fullName.userfullname);// dot ki help se hum nesting function ko access/open kr sakte hai.























// 2 objects ki values ko hum kese merge kr sakte hai. (or)
// how to assign value
// lets learn 

const obj1 = { 1:"a",2:"b",3:"cd"}
const obj2 = { 4:"ef", 5:"gh",6:"ijkl"}

const obj3 = { obj1,obj2}// not the way to merge two object.

console.log(obj3);// isme problem rhegi ki object ke bhitar object aaega.
// but hame 29 object ko merge krana hai.

//to wohh hum kar sakte hai ==== .assign(jo merge krna hai vo varible likhna hai) ya .assign({}, jo jo merge krna hai vo variable ke name) ka use krke

const obj4 = Object.assign(obj1,obj2)
//const obj4 = Object.assign({},obj1,obj2)
//29 same hai only dusra vala professional hai or kuch fark nhi hai.

console.log(obj4,"\n");// output me 29 object merge ho jaenge obj4 me very imp concept hai.

//isi ko assign krna bhi kehte hai ek object ko dusre object me mtlb jb humne likeh object.assign(obj1,obj 2) to iska mtlb hua ki obj2, obj1 me assign ho gya samjhe..... ok console se dekho

console.log(obj1,"\n");// isme bhi wahi output krega jo obj4 ko console krane pr kr rha hai
//thats the way hum use krte hai == Object.assign({},obj1,obj2,etc) taki assign data {}in brackets me assign ho na ki obj1 me

// NOTE :- assign wala method ko hum kam hi use krenge hum jo use krenge wo hai (spread operator(...)) jo ki also use kiya jata hai array ke liye bhi

const obj5 = {...obj1,...obj2} // 90% time yahi use hota hai and aasan  bhi hai..

console.log(obj5,"\n");





























//********* aage chalkar ek or alag syntax = use hoga  jb values jo hai vo database se aaegi ************************

// bahut useful concept hai; samjho 
// jb database se values aati hai to vo aati hai 'ARRAY OF OBJECT' ke form me MTLB objects vala array hota hai, MTLB array ke ander differet*2 object hote hai.

const users/*man lo bhut sare users ka data aaya hai/users aaye hai */ = [
    {
        id :"1",
        email: "13ajit",
        marks : 652
    },
    {
        id : "2",
        email: "rohan23",
        marks: 242
    }
    //etc objects rehenge
]

//ab hame users ko loopthrow karna hai ya koi value print krni hai toh hum krenge 
//users ko lenge
//. lagaenge
//map laga skte hai loopthrow krne ke liye aage samjhenge map kya hota hai js me
// ya users ko lenge 
// and kyunki array hai to simpley array ka indexing number likhenge jo chahiye users[1]

//ab kyunki first value of array ek object hai toh hum use krenge (.)dot notation value ko access krne ke liye users[1].email

//bcoz hmene pada hai object ko access krne ke liye .dot notation  ka use krte hai.... ratloo

console.log(`marks of first user is ${users[0].marks}`)// most useful tarika hai apne hisab se print krvane ka NOTE ise hi INTERPOLATION Kehte hai.. rat lo 
console.log(users[1].email,"\n") // array of objects se data nikale ka syntax hai.










// hum kisi bhi object ki sari keys and value ko le sakte hai nikal sakte hai.

// jab hum object key / value lete hai to vo array form me aati hai mtlb fir hum usme loop bhi laga sakte hai very imp hai aage use hoga when we work with database

const fbUsers = {}//declaring object as constructor tarika 2nd vala issme object is not equal to singleton
    fbUsers.place = "Indore",
    fbUsers.year ="2015",
    fbUsers.percentage = 85,
    fbUsers.data =  "Specific"

    console.log(Object.keys(fbUsers)) 

const instaUsers = {//declaring object as simple tarika / literal way.
    address : "Indore",
    year : "2021",
    total: 526,
    type:  "Specific"
}

console.log(Object.keys(instaUsers))// saari key as a output array form me aa rha hai; iske apne benefits hai. very very useful concept hai.

console.log(Object.values(instaUsers))// values from object bhi nikal sakte hai. output again array form me aaega


console.log(fbUsers.hasOwnProperty('place'))// isse check kr skte hai ki kya fbusers object me place name ki property exist hai ya nhi // ans boolean form me aaega (true/false) similarly :-

console.log(instaUsers.hasOwnProperty('ajit'))// false aaega.












//*************      Q. how to merge Two array data in one array ? // goood question hai       *************

var arr = [ 1,2,53,3,5]
var arr2 = [ 1,22,665,25,32,5]

var arr4 = {...arr,...arr2}
var arr3 = arr , arr2// ans nhi aaega not right way.

// console.log(arr3);
//console.log(arr4);

// pada tha yrr pr mil nhi raha spread operator(...) se hota hai....

 // search on google... on 16 aug 2023


// console.log(arr4);




