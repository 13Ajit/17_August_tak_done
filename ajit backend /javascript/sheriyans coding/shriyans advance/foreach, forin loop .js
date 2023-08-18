//forEach loop sirf array pe chalta hai mtlb jab bhi ek arrray ho tab use mai kaun aata hai = foreach loop

//ye hai forEach loop ka syntax
//            array.forEach(element => {
//    
//            });

//eg.

var a = [2,5,3,35,28,358,521,35,32,3,21,63];

a.forEach(function(val){
    console.log(val+2);
    console.log("ab next element of array a add hoga by 2");
})
console.log("\n");
//iska mtlb hai array (a) ke har ek (forEach) element (val) me 2,2 add hota jaega.

var b =[2,2,582,3,1,32,5,2,6,2,]

b.forEach(function(val){
    console.log(val/2)
    console.log("ek element dividde hogaya ab next wala hoga");
})

//forEach loop kabhi bhi by default hamare original array me change nhi karta hai
//why bcoz val ke dwara change hoti hai values and we know ise ham  call by referece kehtee hai jisme original value me change nhi aata hai.


//*************************************************************

//forIn loop Object pr loop karne ke liye hota hai / kam me aata hai.

/*for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/ //syntax direct priint huva mtlb esa hota hai plus+ simple bhi likh sakte hai dekho
//   for(var/const/let key in objectname){
//        code/statement
//       }

var demoObj ={
    name : "ajit",
    classs : "12",
    rollnu : "856",
    city: "bhopal"
};

for ( var key in demoObj){
    console.log(key);
} // output krega only name, classs, rollnu, city ko na ki ajit,12,856,bhopal ko; for more see output in terminal

console.log("\n");

for ( var key in demoObj){
    console.log(demoObj[key]/*,"\n"*/);
} //ab output me ajit,12,856,bhopal ko print krega;; but how ;; ans is ki demoObj object ke bhitar key access ho rha hai mtlb name, class, city etc jis wajah se unke samne likha data print ho rha hai

console.log("\n");

for ( var key in demoObj){
    console.log(key,demoObj[key]);
} //esa likhne se dono print ho jaega name and usme likha naam bhi understand..

console.log("\n");

//*************************************************************

//dowhile loop same hai ;; c wala hi hai

var a = 1;
do{
    console.log("heloo")
    a++
} 
while(a<=5)