// singleton
// object.create

// object literals
//  const sym = Symbol()
// Non Singlrton Object
// const user ={
//     name:"prakash",
//     age:21,
//     loaction:"Jamshedpur",
//     "hello":"hii",
//     [sym]:"Yes"
// }

// console.log(user["hello"])
// console.log(user["age"])
// console.log(user[sym]);

// +++ upper main how symbol is used in objects++

// Now function 

// user.greeting =function(){
//     console.log(`Hello ${this.name} How are you`)
// }

// console.log(user.greeting())


// +++ Singleton Object
const tinder = new Object()
tinder.id="123abc"
tinder.name="sammy"
tinder.arr =[1,2,3,4]

// console.log(tinder);

const regular ={
    email:"prakash@gmail.com",
    user:{
        fullname:{
            firstname:"Prakash",
            lastname:"Ranjan Pandey"
        }
    }
}

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"c"
}
const obj4={
    5:"a",
    6:"c"
}


// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

// array of objects can come from database

// console.log(tinder);

// datatype of keys and values stored will be array it's important
// console.log(Object.keys(tinder));
// console.log(Object.hasOwnProperty('name'));

const course ={
    name:"js in hindi",
    price:"999",
    teacher:"Prakash"
}
// offcourse course.teacher
// changing the name of teacher (Destructuring)
const{teacher:teach}=course
// console.log(teach);

// Json

// {
//     "name":"hitesh",
//     "course":"js in hindi",
//     "price":"free"

// }

// json can be in array format
[
    {},
    {},
    {}
]
























