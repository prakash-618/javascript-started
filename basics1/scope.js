
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


function one(){
    const username = "Prakash"
    function two(){
        const website ="Youtube"
        console.log(username)
    }

    // console.log(website)
    two()
}
// one()

if(true){
    const username ="Prakash"
    if(username==="Prakash"){
        const website =" youtube"
        // console.log(username+website);  
    }

    // console.log(website)
}
// console.log(username)

// ++++++++++++++   Interesting +++++++++++++++
// this type of calling can be done 
// const j =addone(5)
// console.log(j);
function addone(value){
    return value+1
}

// this type of calling cant be done
addtwo(5)
const addtwo=function(num){
    return num;
}



