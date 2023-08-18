// Objects can also have methods ;;; MTLB ojbect ke bhitar methods hote hai.

// Methods are actions that can be performed on objects.
//objects pr lagane / performed hone vala action hi method kehlata hai.

//methods are stored in properties as function definations

//mtlb ki methods ko hum objects ke propety (name:value) me hi likhte hai as a function defination or

//mtlb = method is funtion (function defination) stored as propety(name:value) of/in object.

//An "Object Method"/"method" is a "function defination", stored as a "property" value.

const student= {
    name: "Ajit singh",
    classs: "12th class",
    contact: "797432242",
    fullInformation : function(){
        return this.name+this.classs;
    }
}// yaha pr 'this' denote karta hai object ko ;; mtlb yaha pr student object ko;; mtlb kehne ka arth hai student.name+classs; understand samjhooo.

//************************************************************
                        // THIS KEYWORD
//this  ek keyword hai refers to an object.

//***************this is used in different ways***************

// 1 :- In ****object method**** this refers to object;; mtlb agar hum object ki property me as a function / method use krenge this ko toh vo this us particular object ko hi belong krega.

// 2 :- ***alone***** , this refers to Global Object ;;; samjhooo jb single this ka use hum krte hai to vo ek global object kehlata hai.

// 3 :- in *****FUNCTION*****
//in function , this refers to Global object.
//in strrict mode, this is undefined
//in function defination this refers to 'owner' of funtion 
// in above eg, 'this' is the "student object" that "owns" the "fullInformation" function.
// in other words, 'this.name' means the Name propety of this object

// 4 :- in ******event***** , this refers to element that received the event;;;; kuch nhi yrr mtlb jis event ke bhitar hum this use krenege vha ye usiii particular event ko refer krega.( simple hai yrr name me hi chupa hai this = yahhh.)

// 5  methods like call(),apply() & bind() can refer this to any object  mtlb ye 3 methods this keyword ko kisi bhi object mtlb jis object me use ho rha hai us ke alawa vale object ke liye bhi refer kr sakte hai.

// this is only a keyword not a variable ;; mtlb this cant be changed.

//*************************************************************
                    // ACCESSING OBJECT METHODS

//  1  SYNTAX IS:
//ObjectName.MethodName()

console.log(student.fullInformation());

//  if we access a method without the ()parentheses, it will return Function defination(jo funtion ki defination body hai vo print/output hoga.

console.log(student.fullInformation);

