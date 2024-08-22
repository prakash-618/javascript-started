const user ={
    username:"Prakash",
    price:999,


    welcomemessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
        
    }
}

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this); this is empty here but on console inspect it takes the global object that is window

// function chai(){
//     let username ="prakash"
//     console.log(this.username);
// }
// chai()
// this can be accesible in object not function
// ++++++ Arrow function++++++
// const chai = ()=>{
//     let username ="hitesh"
//     console.log(this);
// }
// chai()

// const chai = ()=>{
//     let username ="hitesh"
//     console.log(this);
// }
// chai()

// ++++++used in react so remember called implicit return
// explicit return means you are using return keyword in function
// const chai = (num1,num2)=>(num1+num2)
// +++ returning the object
const chai = (num1,num2)=>({})


console.log(chai(3,7))

