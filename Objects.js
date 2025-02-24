const mySymbol = Symbol ("Mykey")

const UjjwalUser=
{
[mySymbol] : "Mykey" ,
Name: "Ujjwal",
Age : "32",
Locationn : "Nepal",
isLoggedIn : false,
email: "Ujjwalmishra272@gmail.com"
}
console.log(mySymbol);
console.log(  UjjwalUser.Locationn);
// Object.freeze(UjjwalUser)

UjjwalUser.greeting = function()
{
    console.log("Hello There");  
}
console.log(UjjwalUser.greeting());
 
let obj1= {1 : "a", 2 :"b"}
let obj2= {3 :"c" , 4:"d"}
console.log(obj3={...obj1 , ...obj2});
  
