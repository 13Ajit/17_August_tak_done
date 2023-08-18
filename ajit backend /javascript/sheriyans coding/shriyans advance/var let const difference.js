//differences

// 1  var function scoped hota Hai mtlab var apne parent function me kahi bhi use ho sakta hai.
// 2  let braces scoped hota hai
// 3 var adds itself to the 'window object' jbki let and const nhi add karta hai khud ko 'window object' me.

function abcd()
{
    var a = 12;
    for(var i = 1; i<=a ; i++)// ab is function me ham variable i ko kahi bhi use kar skt hai. mtlb var i for loop ke bhar bhi kahi bhi use ho sakta hai.
    {
       console.log(i)
      } 
console.log(i,"\n");//ouput me 13 print hoga, bcoz variable (var) function scoped hota hai ,, thats why  var i for loop ke bahar bhi use ho sakta hai/ ho raha hai.
}

abcd()//fucntion calling

//Q:- why we use 'let' in place of 'var' ? 
//anser :- bcoz 'var' function scoped hota hai means vo function khatam hone ke bad bhi khatam nhi hota hai;; bad me bhi use ho sakta hai.
//thats why we use 'let' jo ki braces scoped hota hai mtlb let keval bracket ke bhitar tak hi simit rehta hai . vhi tk use hota hai bahar uski koi value nhi hoti hai.

function abcde()
{
    var a = 12;
    for(let i = 1; i<=a ; i++)
    {
        console.log(i)
       } 

    console.log(a); //i = 13 print nhi hoga bcoz i ab function scoped nhi hai / variable nhi hai. mtlb i ab 'let' hai jo ki keval braces me hi used hoga / for ke braces me.
}

abcde()

function av()
{
    var a =10000;
    console.log(a)//yaha pr hum var b ko nhi print karva skte becoz varibale funtion scoped jarur hota hai funtion me  ke bad kahi bhi use  ho sakta hai magaer/but/lekin var ko hum parent funtion me use nhi kr sakte hai...rat loo
    function def()
    {
        var b = 165;
        console.log(b)
    }
}

av()
