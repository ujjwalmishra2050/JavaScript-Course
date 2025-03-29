let MyObject= {
    name : "Ujjwal",
    Age: "35",
    Class: "B.E"
}
for (const key in MyObject) {
//    console.log(`${key} it has values ${MyObject[key]}`);
    }

let myArr= ["Aa" , "Bb", "Cc" , "Dd"]
for (const key in myArr) {
//    console.log(myArr[key]);
}

let myMap = new Map()
myMap.set("Js" , "Javascript")
myMap.set("CPP" , "C++")
myMap.set("Perl" , "Pearl")
myMap.set("Rust" , "Rust Is Language")

for (const key of myMap) {
    console.log(`${key} its full form is ${myMap[key]}`);
    
}
//In for in if you use for in loop it returns key along with its values