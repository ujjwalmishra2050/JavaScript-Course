let MyObject=
{
username : "Ujjwal",
Age: "40",
Class: "B-Tech"
}
for (const value in MyObject) {
    // console.log(`${value} for the data is ${MyObject[value]}`);
    
}

let Thearray=["Js" , "Ruby" , "Python" , "C++"]
Thearray.forEach(element => {
    // console.log();
    
});

let NewArray= [
    {
        name : "Ujjwal" , 
        Age : "23"
    },


    {
        name : "Rohan", 
        Age : "25"
    },

    {
        name : "Aditya" , 
        Age : "23"
    }

]
NewArray.forEach(items => {
    // console.log(`The Name is ${items.name} and age is ${items.Age}`);
    
});//Property for declaring for each loop in javascript

let myNums = [1,2,3,4,5,6,7,8,9,10]
let NewNums = myNums.map((num) => num + 5)
let OldNums = myNums.filter((Num) => Num >4)
console.log(OldNums);

// console.log(NewNums);

let StringsOld = ["Hello World"]
let StringNew = StringsOld.forEach(element => {
    // console.log(element);
});

let Newearray = [2,4,6]
const Total = Newearray.reduce((init , currval) => init + currval ,0)
// console.log(Total);


let ArrayInit = [3,6,9]
const Totalreduce = ArrayInit.reduce(function (start , current){
    console.log(`The Start Value is ${start} and current value is ${current}`);
    return start + current
},0)
console.log(Totalreduce);

