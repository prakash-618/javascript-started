
// ++++++++++ for Each loop does not return values ++++++++++
// let arra = ['cpp','ruby','python','javascript']


// const values  = arra.forEach( (item)=>{
//     console.log(item)
//     return item
// })

// console.log(values)
// +++++++++++++ filter return values ++++++++++++++ 
// let mynums =[1,2,3,4,5,6,7,8,9,10]

// let numbers = mynums.filter( (nums)=>{
//    return nums
// })
// console.log(numbers)

// ++++++++++++ filter is used to filter the array of object on some given condition ++++++++++++++


// +++ Maps and it also return values but all  +++

const mynums = [1,2,3,4,5,6,7]

//  const lelo = mynums.map( (nums)=>{return nums+1})
// console.log(lelo);

// ++++ Chaining ++++

// const lelo = mynums.map((nums)=>{return nums+1}).map((nums)=>nums*10).filter( (nums)=>{return nums>40})
// console.log(lelo);

// ++++ reduce ++++

// const lelo = mynums.reduce(function (acc,currval){
//     return acc+currval
// },0)
// console.log(lelo);

// const lelo = mynums.reduce((acc,currval)=>acc+currval ,0)
// console.log(lelo);

// real world application of reduce on array of objects

const shoppingcart = [
    {
        itemname:'js course',
        price:2999
    },
    {
        itemname:'cpp course',
        price:3999
    },
    {
        itemname:'python course',
        price:4999
    }
]
const lelo  = shoppingcart.reduce( (acc,curr)=>acc+curr.price,0)

console.log(lelo);




