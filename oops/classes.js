// class user{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     justencrypt(password){
//         return `${this.password}djfdaou859`
//     }
// }
// const fortest = new user("prakash","abc@example.com","866prak")

// const use = fortest.justencrypt()
// console.log(use);


// How we can do same thing by object(function)

function user(username,email,password){
    this.password = password
    this.email = email
    this.password = password
}

user.prototype.encrypt = function(password){
    return `${this.password}dcncdoiu5951`
}

const fortest = new user('prakash','abc@example.com','cbhjcdsc58')
const just = fortest.encrypt()
console.log(just);




