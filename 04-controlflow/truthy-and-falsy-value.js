// const userEmail = "cj@google.com"

// if(userEmail){
//     console.log("got user email");      // this will execute
// }
// else {
//     console.log("don't have user email");
// }

const userEmail = ""
if (userEmail) {
    console.log("got user email");      
}
else {
    console.log("don't have user email");       // this will execute
}

// truthy and falsy values

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function() {} 

// to check for array
const Email = []
// if(Email.length === 0){
//     console.log("array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty")
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10       // 5 will be assigned
// val1 = null ?? 10       // 10 will be assigned
val1 = undefined ?? 15  // 15 will be assigned

console.log(val1);

// terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 100 ? console.log("price is 100") : console.log("price is not 100");
