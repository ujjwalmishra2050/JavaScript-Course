let MyRollNo = Symbol ("mykey1")
let obj1={
    name :"Ujjwal",
    Age: "25",
    Class: "B-Tech",
    [MyRollNo]: "23456",
    Passed: true
}
// console.log(obj1)
// obj1.greeting =function() {
//     console.log("Hello Js User");
// }
// obj1.greetingTwo= function (){
//     console.log(`Hello JS User,${this.name}`);
    
// }
// console.log(obj1.greeting());
// console.log(obj1.greetingTwo());
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));



