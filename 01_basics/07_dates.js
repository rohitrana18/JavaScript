// Dates 
let myDate= new Date();
console.log(myDate.toString());
 console.log(myDate.toJSON());
 console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleTimeString());

// Date is an object in javascript

let myCreatedDate = new Date(2027,11,1) // In JS month starts from 0.So 11 is consider as december month. 
let myCreatedDate = new Date(2027,11,1,12,1)
let myCreatedDate = new Date("12-01-2028")

console.log(myCreatedDate.toLocaleString());


