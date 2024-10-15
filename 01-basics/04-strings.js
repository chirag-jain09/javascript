const newname = "chirag";
const age = 19;

//console.log(name + " and age is "+ age);          // not a good practice
//console.log(`Hello my name is ${newname} and my age is ${age}.`);      // much better approach and most widely used

/***************************** */
//      String Functions/ methods

const name = new String('chirag');
console.log(name.__proto__);            // {}
console.log(name.length);               // 6
console.log(name.toUpperCase());        // CHIRAG
console.log(name.toLocaleUpperCase(0));


