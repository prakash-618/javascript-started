// Immediately invoked function expressions
// to avoid pollution through global scope and variables

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);   
})();

((name)=>{
    // unnamed
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Pandey');

