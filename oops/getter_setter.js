// class user{
//     constructor(email,password){
//         this.email = email
//         this.password = password
//     }

//     set email(value){
//         this._email = value
//     }
//     get email(){
//         return (this._email);
//     }

//     set password(value){
//         this._password = value
//     }
//     get password(){
//         return (`${this._password}687665`);
//     }
// }

// const User = new user('abc@example.ai',"prakash")
// console.log(User);
// console.log(User.password);
// console.log(User.email);


const User = {
    _email:"abc@example.com",
    _password:"abc",

    set email(value){
        this._email = value
    },

    get email(){
        return this._email.toUpperCase()
    }

}

// It's a flexible and lightweight way to establish prototypal inheritance without using constructors or classes
const user = Object.create(User)
console.log(user.email);


