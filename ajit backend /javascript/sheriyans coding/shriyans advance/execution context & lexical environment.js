// execution context mtlb jab bhi hum function chalaayege funtion apna ek khudka ek imaginary contianer bana lega jisemei uski 3 three cheeje hogi;
// 1) variables
// 2) function inside that parent funtion
// 3) lexical environment for that funtion

//lexical environmet batata hai ki aapka funtion ky ky access kr sakta hai or ky ky nhi / funtion me kya kya use kar sakte hai/ ho sakta hai or ky ky use nhi kr sakte / use nhi ho sakta 
//eg chiled funtion ke var ko hum parent  funtion me use nhi kr sakte hai
// niche  likha hai detailed me

//ye jo container hai imaginary ise hi hum execution context kehte hai.

function abcd()
{
    var a = 14;
    console.log(a)
    function def()
    {
        var b = 15;
        console.log(b)
    }
}
abcd()
//execution context of function abcd is
// 1 var hai a = 14
// 2 function hai = def()
// 3 lexical environmet hai (ky ky use kr skte hai and ky ky nhi)  var b = 15 not be used in funtion abcd