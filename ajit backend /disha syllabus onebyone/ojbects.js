//javascript master = master in Object  &  Event

//variables = containers for data values 

let caar = "honda";

//*************************************************************
                    // WHAT IS OBJECT
// Objects are variable too.
// but Object can contain many values (value are written as (name:value) pairs)
// (name:value) pairs in js objects are called Properties.

const car = {
    Name: "honda",
    color: "white",
    model: "2005_model",
    year : "2011",
    wheel: 4
};  //common  practice hai to declare objects with const keyword

//************************************************************
                 // ACCESS TO OBJECTS
//access Object properties in two Ways 
//ObjectName.propertyName  or ObjectName["propertyName"]

//eg.

console.log(car.Name,"\n");
console.log(car["model"],"\n");

console.log(car.Namen+car["model"]+car.color+"2011 version\n")
console.log(`car name is ${car.Name}, model of car is ${car.model} and the color of car is ${car.color}`);

//************************************************************

                        //NEW
// when a js variable declare with keyword "new", then the variable is created as an Ojbect

// x = new string(); //declare x variable as string object
// y = new Number(); //declare x variable as number object
// z = new Boolean(); //declare x variable as boolean object