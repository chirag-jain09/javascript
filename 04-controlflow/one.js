// if

// if (condition) {
//     // code will run if condition is true
// } 

// const isUserLoggedIn = true
// if (isUserLoggedIn) {
//     console.log(`hello user!`);
// }

// if(2 != 3){
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const temparature = 41
// if(temparature === 40){
//     console.log("temparature is 40");
// }
// else {
//     console.log("temparature is not 40")   
// }

// shorthand notation
const bal = 1000
// if(bal > 500) console.log("test");

// Nesting
// if(bal < 500) {
//     console.log("less than 500");
// } else if( bal < 750){
//     console.log("less than 750");
// } else if (bal < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (UserLoggedIn && debitCard){
    console.log("allow to proceed");  
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user is logged In!")
}