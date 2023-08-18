//Array = group of values ( of similar data type)
//array = iski help se hum ek se jayada value store kar skte hai .

var arr= [1,5,132,66,34]
//indexing / counting 0 se start hoti hai.+

//push pop shift unshift

//push to add an (1) element in array
//pop to delete an (1) element in array
var arr= [2,258,258,23,82,69,50]
arr.push(8);
console.log(arr)
var arr= [2,258,258,23,82,69,78]
arr.pop()
console.log(arr)

// array ke shuru me ek member element add karne ke liye hota hai unshift
var arr= [2,258,258,23,82,69,78]
arr.unshift(5)
console.log(arr)

//array se shuru ki value element hatane ke liye hota hai shift

var arr= [20,10,25,258,258,23,82,69,78]
arr.shift()
console.log(arr)

//splice = array me se bich me se jo value hatani hai uska index number likhdenge toh vo value hat jaegi sath hi kitni value hatani hai vo bhi likkhna padta hai
//eg  arr.splice(3,1) iska matlab hai arr array me 3rd number index ki value se 1 value hatani hai
//  arr.splice(6,4) iska matlab hai arr array me 6th number index ki value se 4 values hatani hai

var arr= [2,100,200,23,82,69,78]
arr.splice(2,1)
console.log(arr)

var arr= [2,100,200,23,82,69,78]
arr.splice(4,2)
console.log(arr)