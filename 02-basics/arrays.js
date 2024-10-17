// arrays

const myArr = [10, 2, 24, 34, 42]
// arrays in javascript are resizeble 
// zero based indexing 
// to access elements of an array
console.log(myArr);              // 24
// array-copy operation creates shallow copies
// SHALLOW COPY ->  it is the copy of an object whose properties share the same reference point (heap memory)
// DEEP COPY ->  do not share the same reference point

const names = ["aman", "ram", "joe"]
// another way to declare array
const newArr = new Array(1,3,453,212,53)
console.log(names);
console.log(newArr);

// ------------ Array Methods -------------
// myArr.push(6)           // push adds the value to the end of the array
// myArr.push(39)
// myArr.pop()             // deletes the last value from the array

// myArr.unshift(12)          // it adds the value to the start of an array but not recommended to use
// myArr.shift()              // just like pop but from the beginning

console.log(myArr.includes(2)); // state whether the element is present in the array or not
console.log(myArr.indexOf(72));  // gives the index of the element
console.log(myArr);

const arr1 = myArr.join()        // join convert the array into a string
console.log(myArr);              // [ 10, 2, 24, 34, 42 ]
console.log(arr1);               // 10,2,24,34,42
console.log(typeof arr1);        // string

// slice and splice

console.log("A : ", myArr );

const myn1 = myArr.slice(1, 3);         // 0th index will be included and 3rd index will not be included
console.log(myn1);               // [ 2, 24 ]
console.log("B : ", myArr);      // B :  [ 10, 2, 24, 34, 42 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2);               // [ 2, 24, 34 ]

// but here the inclusion and exclusion of range is not the only difference
// the difference is that splice change the actual array. The array contain only the remaining element after splice operation
console.log("C : ",myArr);       // C :  [ 10, 42 ]

// ------------------------------------ //

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);          // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// not the output we were expecting. It created array inside of an array which we didn't wanted

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);              // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]        // spread operator
console.log(all_new_heros)          // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(5);       // flat operator returns a new array with all subarrays concatenated recursively
console.log(real_another_array);                //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("chirag"))        // false
console.log(Array.from("chirag"));          // [ 'c', 'h', 'i', 'r', 'a', 'g' ]
// from convert the given string or anything into an array
console.log(Array.from({name: "chirag"}));      // interesting case : output -> [] i.e. an empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))       // [ 100, 200, 300 ]

const array1 = ['a', 'b', 'c']
array1.forEach((elmt) => console.log(elmt));
// a
// b
// c
// forEach method of array instances executes a provided function once for each element

const array2 = [12, 54, 1, 82, 72, 23]
array2.sort();
console.log(array2);            // [ 1, 12, 23, 54, 72, 82 ]
const array3 = [12, -54, 1, -82, 72, 23]
array3.sort();
console.log(array3);            // [ -54, -82, 1, 12, 23, 72 ]
// this is not the correct output. So sort() is not a good way of sorting an array
