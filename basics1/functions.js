
// function saymy(){
//     console.log("H")
// }

// // saymy()
// function add(num1,num2){
//     let c=num1+num2
//     return c
// }
// let j = add(5,4)
// // console.log(j);

// function loginuser(username){
//     if(username){
//         return `${username} just logged in`
//     }
//     else{
//         console.log("not provided credentials")

//     }
    
// }
// console.log(loginuser())


// rest operator is here but also called spread operator

function add(...num1){
    return num1
}
// console.log(add(2,4,6,100))

const user ={
    name:"Prakash",
    price:199
}

function handleuser(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

handleuser(user)

