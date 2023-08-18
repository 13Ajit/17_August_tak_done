//************************** [array ki copy] ******************

var arr = [1,2,3,5,36,3,5];
var b = [...arr];  //three 3 dot(...) are called spread operator
// spread operator mtlb three dot bad jo bhi likha hai uski value ko copy kr do and vaha pr rhk do jahan pr spread operator(...)  rakha hai.
b.pop();
console.log(b);


var arr = [1,2,3,5,36,3,5];
var b = arr;//ese bhi copy kr sakte hai.

console.log(b)

//********************** {object ki copy}   **************** */

var obj= {
    name: "ajit"//object me kabhi bhi name = ajit nhi likh sakte mtlb equal'=' sign ki jagah semicolon':' lagana rehata hai
};
console.log(obj)


var webobject = {...obj};//ese bhi copy kr sakte hai..
var newobj = obj;//same way me hum object ko bhi copy kr sakte hai.
console.log(webobject);
console.log(newobj);