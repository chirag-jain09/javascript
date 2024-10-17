// dates

let date = new Date()
console.log(date);          
console.log(date.toString());               // day, date and time (standard time)
console.log(date.toDateString());           // day and date
console.log(date.toISOString());
console.log(date.toJSON());                 
console.log(date.toLocaleDateString());     // only date 
console.log(date.toLocaleString());         // date and time
console.log(typeof date);                   // object

let createdDate = new Date(2024, 10, 17)
console.log(createdDate.toDateString());

// important point ----->>>> month starts with zero in javascript instead of 1 wich is usual
// so instead of showing october it is showing november

let myCreatedDate = new Date("2024-10-17")
console.log(myCreatedDate.toLocaleString());        // 17/10/2024, 5:30:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);                           // 1729162810817 -> time in milisecond from 1st jan 1970

console.log(myCreatedDate.getTime());               // useful for comparision and time based competiitons

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long",
    calendar: "Date",   
})

