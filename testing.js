var array1=["naji", "khuraim","fazal","mushahid"];
// var array2=["hamza","bhutto","kadir"]
// var array3=array1.concat(array2)
for(var i=0; i<array1.length; i++){
    console.log("Name: "+array1[i]);
}
var narray1=array1.splice("khuraim","mushahid");
console.log("Pushed Function /n")
for(var i=0; i<narray1.length; i++){
    console.log("Name: "+narray1[i]);
}
function ageCalculator(year){
console.log(2012-year)
}
let person = {
    name: "naji",
    year: 1950,
    age:ageCalculator

}
person.age(person.year)

person.Dept = "cs"
console.log(person)

function wrapper(){
    var array=[1,2,3,4,5,6];

}


function darrayelements(arr) {
    let darray = [];
    for (let i = 0; i < arr.length; i++) {
        darray.push(arr[i] * 2);
    }
    return darray;
}


let array1 = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 ];
let darray = darrayelements(array1);

console.log("Original Array:", array1);
console.log("Doubled Array:", darray);