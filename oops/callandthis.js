function setusername(username){
    this.username = username
    console.log("Called"); 
}

function setId(username,email,password){
    // .call and use of this sets the current context and when the function called inside is finished the current context "this" will be set

    setusername.call(this,username)
    this.email = email
    this.password = password
}

const user = new setId("prakash","abc@example.com",12345)
console.log(user)