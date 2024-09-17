// const newPromise = new Promise(function(resolve,reject){
//     // do async task
//     // console.log("Async task is not completd yet");
//     // console.log('Async task is completd');
//     setTimeout(() => {
//         console.log("Async task is completed");
//             resolve(); 
//     }, 1000);
    
// })

// newPromise.then(()=>{
//     console.log('Promise consumed')
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve()
//         console.log("Async 2 completed");
        
//     },1000)
// }).then(()=>{
//     console.log("Async 2 resolved");
// })



const Promisefour = new Promise(function(resolve,reject){
    let error = true
    if(error){
        reject({username:"prakash",password:"123456"})
    }
    else{
        resolve("things are resolved")
    }
})
// chaining of then and catch is possible here
Promisefour
.then((user)=>{
    console.log(user);
})
.catch((user)=>{
    console.log(user);
    return user;
})
// When a catch block returns a value, it becomes the new resolved value of the promise.
.then((users)=>{
    console.log(users.password)
})
.finally(()=>{
    console.log('Finally Ended');
})




const Promisefive = new Promise(function(resolve,reject){
    let Error = true
    if(Error){
        reject({username:"prakash Ranjan Pandey",password:"1234567"})
    }
    else{
        resolve("things are resolved")
    }
})

async function consumefivepromise(){
    try {
        const response = await Promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumefivepromise()
// Doubt why is the async await is working first before the then and catch




