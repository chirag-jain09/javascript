// Functions

// FUNCTION DEFINITION
function myName() {
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("G");   
}

// myName()            // function call

// function addTwoNumbers(num1, num2){         // num1 and num2 are parameters 
//     console.log(num1 + num2);    
// }

// addTwoNumbers();                // NaN
// addTwoNumbers(34, 43);          // 77
// what if 
// console.log(3 + "4");              // 34    3 and 4 are arguments
// javascript will treat the arguments as strings and the addition will be of strings

// const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);        // Result:  undefined
// why so?

function addTwoNumbers(num1, num2){         
    //console.log(num1 + num2);    

    let result = num1 + num2;
    return result
}

// const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);            // Result:  8

function loginUserMessage(username) {
    if(username === undefined){             // we can also use if(!username)
        console.log("Please enter the valid username.");    
        return
    }
    return `${username} just logged in`
}

loginUserMessage("chirag")                      // nothing in result
// console.log(loginUserMessage("chirag"))         // chirag just logged in        
// result before using the if statement
// console.log(loginUserMessage());                // undrfined just logged in
// result after the if statement
//console.log(loginUserMessage());                   // Please enter the valid username.

// --------------------------- //

// function calculateCartPrice (num1) {
//     return num1
// }

// console.log(calculateCartPrice(2));     // 2
// but we don't know how many items user can enter so we use rest operator
// ... is rest operator. It is also known as spread operator

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 600));     // [ 200, 400, 600 ]

const user ={
    username: "chirag",
    itemPrice: 299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and cart price is ${anyobject.itemPrice}`);
}

//handleObject(user)              // Username is chirag and cart price is 299
handleObject({
    username: "sam",
    itemPrice: 399                // Username is sam and cart price is 399
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));     // 300

// another way to create function
// const addOne = function(num){
//     return num + 1
// }
// addOne(5);
// console.log(addOne(5));             // 6

// now if we declare function before definition in this method we will get an error

// console.log(addOne(5));                 // Error ->  Cannot access 'addOne' before initialization
const addOne = function(num){
    return num + 1
}
addOne(5);
   