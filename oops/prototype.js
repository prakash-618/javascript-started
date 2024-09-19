function multipltBy5(num){
    return num*5
}

multipltBy5.prakash =2

console.log(multipltBy5(5))
console.log(multipltBy5.prakash)
console.log(multipltBy5.prototype);
// function is function but can also behave as a object

function createUser (username,score){
    this.username = username
    this.score = score
}
 createUser.prototype.increment = function (){
    this.score++;
    console.log(this.score)
 }
 createUser.prototype.printMe = function (){
    console.log(`Prakash score is ${this.score}`)
 }

const just = new createUser("prakash",25)
console.log(just.increment())
console.log(just.printMe())







