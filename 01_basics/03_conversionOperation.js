let score = "33ab"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber= Number (score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber );

// NaN refers to not a number.
// "33 " = into 33
// "33abc" = into NaN
// true = 1, false = 0.
// null = 0.
// undefined = NaN.

let isLoggedIn = 1

let BooleanisLoggedIn = Boolean(isLoggedIn)
//console.log(BooleanisLoggedIn);

// true = 1 and false =0
// "" = false and "Rohit" = true

let someNumber = 35
let stringNumber = String(someNumber)
console.log(typeof stringNumber);


//********************** Operations *************************

let value = 467
let negvalue = -value
console.log(negvalue);

// console.log(2%3);

let str1 = "Hello"
let str2 = " Rohit"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2) // if we write first number as string then it will consider rest of the number as string.
console.log(1+2+"2") // if we write first number as integer then it will consider rest of the number as an integer except the number is string.


let gameCounter = 99
gameCounter++
console.log(gameCounter)
// for understanding prefix and postfix
