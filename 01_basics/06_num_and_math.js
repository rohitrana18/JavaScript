// Simple way to define a number or this is an integer.
const amount = 833
console.log(amount);

// Defining the number expecetally or espacially.
const balance =new Number(199)
console.log( balance);

console.log(balance.toString())
 // Now we can use all the string properties because it is become a string.
 console.log(balance.toString().length)
 // Use to fix the number after decimal point ex:-100.00
 console.log(balance.toFixed(2))

 const newnumber = 32.8493
 console.log(newnumber.toPrecision(5));

 // It seperate the 0 by US standard
 const number1 =10000000
 console.log(number1.toLocaleString('en-IN'));


//+++++++++++++++++ Maths ++++++++++++++++++

console.log(Math.abs(-6));
console.log(Math.round(56.49));
console.log(Math.ceil(4.1));
console.log(Math.floor(6.99));
console.log(Math.min(3,2,8,4,1,8,0.1,3));
console.log(Math.max(3,2,8,4,1,8,0.1,3));


// Provide random values between 0 and 1.
console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 8
const max = 10
console.log(Math.floor(Math.random()*(max - min +1))+min);