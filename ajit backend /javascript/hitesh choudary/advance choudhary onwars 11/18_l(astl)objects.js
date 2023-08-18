// object discussion hi aage jakar help krat hai / banta hai API discussion.

// destructuring






//destructuring array ki bhi hoti hai and Array ki bhi hoti hai.
// Now understand Destructuring of Array 
//********** VERY IMP TOPIC HAI aage chalkar kaam aaega APIs me / React me. **********

const course = {
    name : "js in hindi"
    , price: "999",
    courseInstructor: "Hitesh"
}

//to print / Access keys and values of object we simply use .dot Notation okkk

console.log(course.price);  //output = 999

// now ek or tarika hai // ye keval ek syntaxical tarika hai , 'to access' or 'to destructure and access' object keys and values is : -
 
// ye tarika used only to show to be professional and to becoz it help in react destruturimg

// syntax hai
// 'const {___jo value access karni hai__} =___jaha se value extract karni hai______' //mtlv object / Array ka name

const {courseInstructor} = course

// now ab jese hi hum courseInstructor console karaenge value of object access ho jaegi

console.log(courseInstructor); // output = "Hitesh"

// now ab agar hum chahte hai ki is key ko bhi naya name dena chahiye to de sakte hai 

const {courseInstructor : NewName} = course // object de-structure
console.log(NewName); // result same aaega = "hitesh"


// React me de-structuring concept ko ese use krte hai // {{company}} = de-structuring hai, only understand ki {{}} = destruturing enough hai



//***************............API's................********************

// jab bhi aapko apna kam kisi or ke sar pr dal dena ho to usse api kehte hai.

// hum only login kr dete hai ok websites pr ,,.,  ab us pr kaha se search krna hai,kese verify karna hai, kya process krna hai, deataiils lani hai, etc sare kam hamare nhi hai ye sab kam API krta hai / API ke throw hoti hai.



// API Kuch nhi hai, hamare pass kuch values aati hai backend se , un values ko kese hum likhte hai.
// pehle values aati thi XML structure me jo bahut complex tha 
// NOW , mostly values aati hai JSON form me , it is very easy


//json form / json structure // 1 object // 2 array
// 29 me se koi sa bhi json data mil jata hai koi problem nhi hai


// 1 object form me json values / data
// {
//  key : value,
//  key2 : value 2,
// etc
// }

// 2 Array format me json values / data
// [
//     {},
//     {},
//     {},
//     etc
// ]

//not confuse, object( format) hi hai, keval itna difference hai ki iska koi Name nhi hai

// {
//     name :"Ajit"
//     , coursename: "js in hindi-english"
//     , platform: "youtube"
//     , price: "99"
// }



