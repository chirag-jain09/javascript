const accountId = 123456;
let accountMail = "chirag@google.com";
var accountName = "chirag";
accountCity = "jaipur";         // never declare variables without let, const or var. It is not a good practice and can be dangerous if the program is very big
let accountState;

/*
console.log(accountId);
console.log(accountMail);
console.log(accountName);
*/

// now doing some changes
//accountId = 234321;
console.log(accountId);     // will throw an error as const values can't be changed

accountMail = "abc@google.com"
accountName = "abc"
accountCity = "bengaluru"

//console.log(accountMail);       // the accountMail is changed
// instead of writing console.log again and again for each entry we can use console.table

console.table([accountId, accountMail, accountName, accountCity, accountState]);
// it gave the output in a tabular structure.

/*
prefer not to use 'var' 
because of the issue of block scope and functional scope.
*/

// accountState will show undefined as their is not value assigned to it.


