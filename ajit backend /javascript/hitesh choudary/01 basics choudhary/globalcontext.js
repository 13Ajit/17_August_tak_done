console.log("hello ajit this is the result of global context ( similar to hoisting.)")//prints message bcoz js me 'global context' ek feature hai jo ki c & c++ me nhi rheta hai jiski vajah se hum niche declare kri chezooo ko uper use nhi kr sakte; but js me global context is available ...

function hey(){
    console.log("hello world")
    
}


console.log(hey()); // prints hello world ok


//*********************************************************************



var Myname = "ajit"
if(Myname === Myname){
    console.log("this is true ");
}//

if(Myname === window.Myname){
    console.log("this is true ");
}//output nhi dega error dega bcoz this is node compiler yaha global context differ hai browser vale global context se ;;; mtlb ki yhi code (window.Myname) vala agar hum browser - inspect - console me likhte to output de deta
// dont be worry about it becoz  ye aaage ka concept hai.. abhi nhi khabrana hai. just know ki esa bhi kuch hota hai.
