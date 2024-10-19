// object literals

const mySym = Symbol("key1"); 

const Jsuser = {
    name: "chirag",
    "full name": "chirag abc",
    [mySym]: "mykey1",              // syntax to access symbol in object
    age: 19,
    email: "chirag@gmail.com",
    isLoggedIn: false
}

console.log(Jsuser.name);               // chirag
console.log(Jsuser.email);              // chirag@gmail.com
console.log(Jsuser.isLoggedIn);         // false

// better way to access keys

console.log(Jsuser["full name"]);           // chirag abc
// because thid ("full name": "chirag abc") type of values can not be access by using '.' operator
console.log(Jsuser[mySym]);             // mykey1

// to change the value
Jsuser.name = "raj"
console.log(Jsuser.name);                   // raj

// to lock the values we use
//Object.freeze(Jsuser);          // after this no change in the object will happen

Jsuser.name = "ram"
console.log(Jsuser);            // their is no change in name after we use the freeze operation

Jsuser.greeting = function(){
    console.log("hello user");
}
Jsuser.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);    
}

console.log(Jsuser.greeting);               // [function (anonymous)]
console.log(Jsuser.greeting());             // hello user
console.log(Jsuser.greetingTwo());          // hello user, ram 

//------------------------------//

//const appuser = new Object()              // singleton object
const appuser = {}                          // (non singleton object) no difference in this and above statement

appuser.id = "123abc",
appuser.name = "sam",
isLoggedIn = false

//console.log(appuser);                       // {}

const regularUser = {
    name:  "joey",
    fullname: {
        userfullname: {
            firstname: "ram",
            lastname: "raj"
        }
    }

}

// console.log(regularUser.fullname);                  // { userfullname: { firstname: 'ram', lastname: 'raj' } }
// console.log(regularUser.fullname.userfullname);     // { firstname: 'ram', lastname: 'raj' }
// console.log(regularUser.fullname.userfullname.firstname);   // ram

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3);         // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// the result was just like arrays. Kind of objects in object

//const obj3 = Object.assign({}, obj1, obj2)        // copy the value of all of the enumerable own properties from one or more source objects to a target object.
//console.log(obj3);            // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// another way to get the above result is to use spread operator
const obj3 = {...obj1, ...obj2} // majority of times we are gonna use this
console.log(obj3);              // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// when the values comes from the database we use
// example
const users = [
    {
        id: 1,
        email: "abc@google.com"
    },
    {
        id: 2,
        email: "bcd@google.com"
    },
    {
        id: 3,
        email: "cde@google.com"
    },
]

users[1].email         
console.log(appuser);   // { id: '123abc', name: 'sam' }
console.log(Object.keys(appuser));      // [ 'id', 'name' ]
console.log(Object.values(appuser));    // [ '123abc', 'sam' ]
console.log(Object.entries(appuser));   // [ [ 'id', '123abc' ], [ 'name', 'sam' ] ]

// to check if any property is there in the object we use hasOwnProperty
console.log(appuser.hasOwnProperty('isLoggedIn'));  // false

//-------------------------------- //

// destructuring of object

const course = {
    coursename: "javascript full course",
    price: "999",
    courseInstructor: "yet to be decided"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);      // yet to be decided

console.log(instructor);            // yet to be decided

// something on JSON

// {
//     "name": "chirag",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]