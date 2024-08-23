const useremail = "email.com"

if(useremail){
    console.log("got user email")
}
else{
    console.log("Don't have user email");
    
}

// +++falsy values+++

// false , 0 ,-0, BigInt 0n,"",null,undefined,NaN

// +++truthy values+++
// "0", 'false', " " , [] , {}, function(){}

// if we want to check that if aaray is empty or not

// if(Array.length===0){
//     console.log("array is empty");
    
// }

// if we want to check an object is empty or not
// as object.keys( ) converts the object to array
// if(Object.keys(obj).length===0){
//     console.log("object is empty");
    
// }

// +++++++ Nullish Coalescing Operator(??):null undefined +++++
let val1
// val1 = 5??10

// val1=null??10
val1 = undefined??10

console.log(val1);

// Ternary operator

const iceTeaPrice =100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")


