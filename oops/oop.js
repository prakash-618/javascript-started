const user = {
    username:"Prakash",
    signedIn:"prakash",
    getuserdetails:function(){
        console.log("prakash is studying");   
        console.log(`Name is ${this.username}`);
        return this.signedIn
    }
}
console.log(user.getuserdetails());

function users(username,loginCount,IsloggedIn){
    this.username = username
    this.logincount = loginCount
    this.IsloggedIn = IsloggedIn
    // return this
}

// const userone = users("prakash",16,true)
// ++++ values have been overwritten by usertwo ++++
// const usertwo = users("pandey",24,false)


// hence new keyword is needed it gives a new instance always hence any previous would not be overwritten

const userone = new users("prakash",16,true)
const usertwo = new users("pandey",24,false)


console.log(userone)
console.log(usertwo)

