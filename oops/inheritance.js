class user{
    constructor(username){
        this.username = username
    }

    static logMe(username){
        console.log(`username is ${username}`);
    }
}

class teacher extends user{
    constructor(username,email,phone){
        super(username)
        this.email = email
        this.phone = phone
    }

    addcourse(){
        console.log(`Course added by the ${this.username}`)
    }
}

// const prakash = new teacher("Anjali","abc@email.com",9687878678)

// console.log(prakash.addcourse())

// const User = new teacher("Anjali")
// console.log(User.logMe());

// As we can see teacher class have access to user class because it's inherited from user but Vice Versa is not true 


// Static methods do not inherit
// static methods can't be accessed by instances created but can be accessed by class only

const User = new user("Prakash")
// User.logMe()
user.logMe("prakash")

