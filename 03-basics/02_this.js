const user = {
    username: "chirag",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);      // {}

// function one() {
//     let username = "chirag"
//     // console.log(this);       // so many attributes (detailed)

//     // if I use thi.username it will show undefined
//     console.log(this.username);     // undefined
// }

// one();

// Arrow function
const one = () => {
    let username = "chirag"
    console.log(this)
}

// one()           // {}
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,5))        // 8
// another way is called implicit return
// const addTwo = (num1, num2) => num1 + num2

// or we could write 
// const addTwo = (num1, num2) => (num1 + num2)
//console.log(addTwo(3,5));           // 8

const funObj = () => ({username: "chirag"})     //{ username: 'chirag' }
console.log(funObj());

// ++++++++++++++++++++++++++++++++++ //
// Immediately Invoked Function Expressions (IIFE)
// we use it to save the code from the global scope pollution

(function tea (){
    console.log("DB connected");
})();
// here, the first parenthesis is for the function definiton
// while the second parenthesis is for the function execution
// the semicolon is necessory at the end to end the IIFE

// unnamed IIFE
( (name) => {
    console.log(`DB Connected two ${name}`);
}) (`chirag`)
