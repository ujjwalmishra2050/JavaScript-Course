let items = ["Ramsh", "Suresh" , "Rohan" , "Ganesh"]
items.forEach(function () {
    // console.log(ve); 
})

function Printme(items , index , arr){
    console.log(items , index , arr); //we can also use by declaring functions
}
items.forEach(Printme)