
// scope can be with function,if,else
let a=300
if(true){
    let a=10
    const b =20
    var c  =30
}
// a,b of let , const are not available outside the given if condition
// var is available outside,hence var is not used

// a that is defined outside the if condition is global scope
// but inside if condition is block scope

