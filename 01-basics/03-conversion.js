let num = 33
console.log(num);                          // 33
console.log(typeof num);                   // number

let newNum = String(num);
console.log(newNum);                       // 33
console.log(typeof newNum);                // string

let statement = true;
console.log(statement);                    // true
console.log(typeof statement);             // boolean

let newSt = Number(statement);
console.log(newSt);                        // 1
console.log(typeof newSt);                 // number

// Note that true => 1 & false => 0 if the conversion is from boolean to number
// "" will also give false

let address = "23abc";
console.log(typeof (address));             // string

let newAdd = Number(address);
console.log(typeof newAdd);                // number
console.log(newAdd);                       // NaN *******

let score = null;
console.log(score);                        // null
console.log(typeof score);                 // object

let newScore = Number(score);
console.log(newScore);                     // 0
console.log(typeof newScore);              // number

let some = undefined;
console.log(some);                         // undefined
console.log(typeof some);                  // undefined

let newSome = Number(some);
console.log(newSome);                      // NaN
console.log(typeof newSome);               // number

let something = true;
console.log(something);                    // true
console.log(typeof something);             // boolean

let newSomething = Number(something);
console.log(newSomething);                 // 1
console.log(typeof newSomething);          // number



