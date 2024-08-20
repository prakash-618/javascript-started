
function saymy(){
    console.log("H")
}

// saymy()
function add(num1,num2){
    let c=num1+num2
    return c
}
let j = add(5,4)
// console.log(j);

function loginuser(username){
    if(username){
        return `${username} just logged in`
    }
    else{
        console.log("not provided credentials")

    }
    
}
console.log(loginuser())




