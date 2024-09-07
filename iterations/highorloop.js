// for of

// ['','']

const arr =[1,2,3,4,5]


// for (const num of arr) {
//     console.log(num)
// }

const greetings = 'Hello World'
for (const greet of greetings) {
    // console.log(greet)
}

// maps

const map = new Map()

map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('I',"India")

// console.log(map);
// [key,value] destructure the map now you can iterate easily
for (const [key,value] of map) {
    // console.log(`${key}:-${value}`);
}

// if we consider forof loop it will not work on object for iteration
// hence we use forin loop for objects
// forin
let myobject = {
    js:'javascript',
    cpp:'C++',
    rb:'Ruby'
}

for (const key in myobject) {
//    console.log(`${key} is the shortcut of ${myobject[key]}`);
}

// if we apply forin loop on array then it will print index 


// foreach
let arra = ['cpp','ruby','python','javascript']

arra.forEach(function (item) {
    // console.log(item);
})

arra.forEach((item)=>{
    // console.log(item);
})

function name(item){
    // console.log(item)
}
arra.forEach(name)

arra.forEach((item,index,arr)=>{
    // console.log(`${item},${index}`,arr);
})

const myobj =[
    {
        language:'javascript',
        notation:'js'
    },
    {
        language:'C++',
        notation:'cpp'
    },
    {
        language:'python',
        notation:'py'
    }
]

myobj.forEach( (item)=>{
    console.log(item.language);
})






